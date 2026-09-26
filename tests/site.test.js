import { test } from "node:test";
import assert from "node:assert/strict";
import { build } from "esbuild";
import { mkdir } from "node:fs/promises";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

await mkdir("node_modules/.cache/cohesion", { recursive: true });
await build({
  entryPoints: ["src/App.jsx"],
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  loader: { ".css": "empty" },
  outfile: "node_modules/.cache/cohesion/app.mjs",
});
const { default: App } =
  await import("../node_modules/.cache/cohesion/app.mjs");
const files = [
  "index.html",
  "damp-and-mould.html",
  "gas-compliance.html",
  "electrical-compliance.html",
  "awaabs-law-compliance.html",
];
const pages = new Map(
  files.map((file) => {
    globalThis.location = { pathname: `/${file}`, hash: "" };
    return [file, renderToStaticMarkup(React.createElement(App))];
  }),
);

test("all five routes render one main landmark, one h1 and shared navigation", () => {
  for (const [file, html] of pages) {
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, file);
    assert.equal((html.match(/<main[ >]/g) || []).length, 1, file);
    assert.match(html, /aria-label="Main navigation"/);
    assert.match(html, /Skip to content/);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, `${file}: duplicate IDs`);
  }
});
test("every local navigation link points to an existing page and anchor", () => {
  for (const [file, html] of pages) {
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
      if (/^(https?:|mailto:)/.test(href)) continue;
      const [path, hash] = href.split("#");
      const target = pages.get(path || file);
      assert.ok(target, `${file}: unknown page ${href}`);
      if (hash && hash !== "top")
        assert.ok(
          target.includes(`id="${hash}"`),
          `${file}: missing anchor ${href}`,
        );
    }
  }
});
test("each workflow has five accessible tabs and one initial visible panel", () => {
  for (const file of files.slice(1)) {
    const html = pages.get(file);
    assert.equal((html.match(/role="tab"/g) || []).length, 5, file);
    assert.equal((html.match(/role="tabpanel"/g) || []).length, 5, file);
    assert.equal((html.match(/aria-selected="true"/g) || []).length, 1, file);
    assert.equal(
      (html.match(/<div[^>]*role="tabpanel"[^>]*hidden=""/g) || []).length,
      4,
      file,
    );
  }
});
test("AI agents retain deep links and concept status", () => {
  globalThis.location = { pathname: "/index.html", hash: "#evidence-gap" };
  const html = renderToStaticMarkup(React.createElement(App));
  assert.match(html, /id="evidence-gap"[^>]*aria-selected="true"/);
  assert.match(html, /Illustrative workflow/);
  assert.match(html, /Platform in development/);
  assert.match(html, /Time\+is\+subject\+to\+confirmation/);
});

test("tab keyboard navigation wraps and supports Home and End", async () => {
  const { tabKey } = await import("../node_modules/.cache/cohesion/app.mjs");
  for (const [key, start, expected] of [
    ["ArrowRight", 4, 0],
    ["ArrowLeft", 0, 4],
    ["ArrowDown", 0, 1],
    ["ArrowUp", 1, 0],
    ["Home", 3, 0],
    ["End", 1, 4],
  ]) {
    let clicked = -1,
      focused = -1,
      prevented = false;
    const tabs = Array.from({ length: 5 }, (_, i) => ({
      click() {
        clicked = i;
      },
      focus() {
        focused = i;
      },
      closest() {
        return {
          querySelectorAll() {
            return tabs;
          },
        };
      },
    }));
    tabKey({
      key,
      currentTarget: tabs[start],
      preventDefault() {
        prevented = true;
      },
    });
    assert.equal(clicked, expected, key);
    assert.equal(focused, expected, key);
    assert.ok(prevented, key);
  }
});
