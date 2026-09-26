# Cohesion — React website

A responsive React 19 + Vite marketing website for property management and compliance intelligence.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local address printed by Vite. HTML entry files must be served through Vite or a web server; opening them directly from disk no longer runs the React application.

```sh
npm test
npm run build
npm run preview
```

`dist/` contains the production site. Deploy its contents to a static host. All five original `.html` URLs remain available, including on hosts without SPA rewrites.

## Structure

- `src/App.jsx`: shared navigation, homepage, product catalogue, footer and React interaction state.
- `src/components/`: preserved product journeys, planned AI-agent explorer, company and contact sections.
- `src/styles.css`: enterprise design system and responsive layouts.
- `src/legacy.css` and `src/enterprise.css`: retained detailed diagram and content layouts, extended by the new design system.
- `public/`: favicon and original founder photograph.
- `tests/site.test.js`: server-rendered route, link, accessible panel and deep-link checks.
- `.openai/hosting.json`: private Sites deployment configuration.

## Product scope

This is a marketing website, not an operational compliance platform. Product illustrations and AI agents describe planned capabilities. Proposed integrations depend on implementation and customer system access. No customer metrics, certifications or live data are claimed.

The Google Calendar link creates an event draft for a proposed meeting with Jesse; it does not show live availability or automatically book a meeting. Google Chat opens Chat home; visitors search for the displayed email address. No contact forms or backend services are added.

## Migration notes

The original homepage content was consolidated into a clearer product overview. The four product journeys and their stage controls, all six AI-agent tabs, founder story, development status, contact links and partnership options are retained. Shared site chrome and interactive state now live in React. No `innerHTML` injection or legacy DOM event scripts are used.

Automated checks cover rendered structure and navigation. Browser interaction and visual testing have not been performed.
