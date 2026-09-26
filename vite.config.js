import { defineConfig } from "vite";
import { resolve } from "node:path";
export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        [
          "index",
          "damp-and-mould",
          "gas-compliance",
          "electrical-compliance",
          "awaabs-law-compliance",
        ].map((page) => [page, resolve(import.meta.dirname, `${page}.html`)]),
      ),
    },
  },
});
