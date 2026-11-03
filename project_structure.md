Most changes belong in **`src/App.jsx`**, **`src/components/`**, or **`src/styles.css`**. The root HTML files mainly load the React app and provide page metadata.

The application loads like this:

```text
Root HTML file
  └── src/main.jsx — starts React
       └── src/App.jsx — selects the page and manages interactions
            ├── Header
            ├── Homepage sections OR a product page
            └── Footer
```

Your project structure:

```text
cohesion 2/
├── index.html                    Homepage entry + metadata
├── damp-and-mould.html           Product entry + metadata
├── gas-compliance.html          Product entry + metadata
├── electrical-compliance.html   Product entry + metadata
├── awaabs-law-compliance.html   Product entry + metadata
│
├── src/
│   ├── main.jsx                 Mounts React into the HTML
│   ├── App.jsx                  Shared layout, homepage and page selection
│   ├── styles.css               Current blue-and-white theme
│   ├── enterprise.css           Earlier enterprise layout styles
│   ├── legacy.css               Original base and diagram styles
│   │
│   └── components/
│       ├── AiAgents.jsx         Six planned AI-agent tabs
│       ├── Mission.jsx          Mission section
│       ├── Founder.jsx          Founder biography and photograph
│       ├── ProductMaturity.jsx  Development status
│       ├── Contact.jsx          Contact details and demo booking
│       ├── Engage.jsx           Partnerships and collaboration
│       ├── DampAndMould.jsx     Damp and mould product journey
│       ├── GasCompliance.jsx   Gas product journey
│       ├── ElectricalCompliance.jsx
│       └── AwaabsLawCompliance.jsx
│
├── public/
│   ├── favicon.svg              Browser tab icon
│   └── assets/jesse-founder.jpg Photo used by the site
│
├── tests/site.test.js           Navigation, page and tab checks
├── vite.config.js              Defines the five HTML entry points
├── package.json                Dependencies and development commands
└── dist/                       Generated production output
```

**Where to make common changes**

| What you want to change | Where to edit |
|---|---|
| Product card names, descriptions and tags | `products` array in [App.jsx:24](</Users/amoakomensah/Desktop/cohesion_website/cohesion 2/src/App.jsx:24>) |
| Logo / wordmark | `Logo()` in `App.jsx`, line 89 |
| Navigation and mobile menu | `Header()` in `App.jsx`, line 99 |
| Illustrative homepage dashboard | `Overview()` in `App.jsx`, line 166 |
| Homepage headline and introductory text | `Hero()` in `App.jsx`, line 232 |
| Product card layout | `Products()` in `App.jsx`, line 292 |
| Footer links and content | `Footer()` in `App.jsx`, line 349 |
| Homepage section order | `App()` near the bottom of `App.jsx` |
| AI-agent descriptions and diagrams | `src/components/AiAgents.jsx` |
| Product walkthrough text and diagrams | The corresponding product component |
| Contact email and calendar link | `Contact.jsx`; email also appears in `Founder.jsx`, `Engage.jsx`, and the footer |
| Colours, typography, spacing and mobile layouts | [styles.css](</Users/amoakomensah/Desktop/cohesion_website/cohesion 2/src/styles.css>) |
| Browser title and search description | `<title>` and description in each root HTML file |

**How styling works**

The styles load in this order:

```text
legacy.css → enterprise.css → styles.css
```

Start with **`styles.css`** for design changes. Later rules win when selector specificity is equal; a more specific older rule can still take precedence.

The variables near its top control common colours:

```css
--ink      /* Main text */
--muted    /* Supporting text */
--accent   /* Accent colour */
--line     /* Borders */
--pale     /* Light surfaces */
```

Some colours are still written directly inside individual rules, so changing these variables alone won’t recolour everything. Responsive rules begin around line 780.

**How pages and interactions work**

`App.jsx` reads the URL filename and selects the matching product component. It does **not** currently use React Router. All pages share the same header and footer.

React state in `App()` controls the selected workflow stage and AI agent. The components receive that state and event handlers through props. The mobile menu manages its own state inside `Header()`.

For everyday editing, run:

```sh
npm run dev      # Preview changes as you edit
npm test         # Check navigation and component structure
npm run build   # Generate the production site
```

Edit source files rather than `dist/`; the next build replaces `dist/`.