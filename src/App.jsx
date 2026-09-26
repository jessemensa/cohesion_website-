import React, { useState, useEffect, useRef } from "react";
import AiAgents from "./components/AiAgents";
import Mission from "./components/Mission";
import Founder from "./components/Founder";
import ProductMaturity from "./components/ProductMaturity";
import Contact from "./components/Contact";
import Engage from "./components/Engage";
import DampAndMould from "./components/DampAndMould";
import GasCompliance from "./components/GasCompliance";
import ElectricalCompliance from "./components/ElectricalCompliance";
import AwaabsLawCompliance from "./components/AwaabsLawCompliance";
import "./legacy.css";
import "./enterprise.css";
import "./styles.css";

const agentKeys = [
  "report-completeness",
  "scheduling-agent",
  "evidence-gap",
  "exception-explanation",
  "data-insights",
  "job-assistant",
];
const products = [
  {
    id: "ecosystem",
    file: "damp-and-mould",
    icon: "home",
    category: "PROPERTY MANAGEMENT",
    name: "Damp & Mould",
    description:
      "Bring tenants, property teams and contractors together. One connected journey from the first report to resolution.",
    tags: ["Tenant reporting", "Coordinated delivery"],
  },
  {
    id: "gas",
    file: "gas-compliance",
    icon: "flame",
    category: "COMPLIANCE INTELLIGENCE",
    name: "Gas Compliance",
    description:
      "Connect property records, servicing and certificates. Understand your position and see the evidence behind it.",
    tags: ["Servicing evidence", "Clear exceptions"],
  },
  {
    id: "electrical",
    file: "electrical-compliance",
    icon: "bolt",
    category: "COMPLIANCE INTELLIGENCE",
    name: "Electrical Compliance",
    description:
      "Bring inspections and remedial works into one picture. Identify missing reports and unresolved findings.",
    tags: ["Inspection records", "Remedial tracking"],
  },
  {
    id: "awaabs-law",
    file: "awaabs-law-compliance",
    icon: "shield",
    category: "COMPLIANCE INTELLIGENCE",
    name: "Awaab’s Law",
    description:
      "Connect case timelines, actions and communications to understand the complete case journey.",
    tags: ["Case timelines", "Supporting evidence"],
  },
];
function Icon({ name, ...props }) {
  const paths = {
    home: "M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z",
    flame:
      "M13 3c1 5-5 5-3 10-3-1-3-3-3-3s-4 4-2 8c3 6 13 4 14-2 1-5-3-9-6-13Z",
    bolt: "m13 2-9 12h7l-1 8 10-13h-8Z",
    shield: "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Zm-4 9 3 3 5-6",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] || paths.shield} />
    </svg>
  );
}
function Logo() {
  return (
    <a className="brand" href="index.html" aria-label="Cohesion home">
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M28 6H13L5 18l8 12h15M28 13H17l-4 5 4 5h11" />
      </svg>
      cohesion<span className="brand-dot">.</span>
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const links = [
    ["Our products", "platforms"],
    ["AI agents", "ai-agents"],
    ["Our mission", "mission"],
    ["Meet the founder", "founder"],
  ];
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="app-header">
        <div className="header-inner">
          <Logo />
          <nav className="wide-nav" aria-label="Main navigation">
            {links.map(([name, id]) => (
              <a key={id} href={`index.html#${id}`}>
                {name}
              </a>
            ))}
          </nav>
          <a className="button header-cta" href="index.html#demo">
            Book a demo <span aria-hidden="true">↗</span>
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav-new"
          hidden={!open}
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              toggle.current.focus();
            }
          }}
        >
          {[...links, ["Get in touch", "contact"], ["Book a demo", "demo"]].map(
            ([name, id]) => (
              <a
                key={id}
                href={`index.html#${id}`}
                onClick={() => setOpen(false)}
              >
                {name}
                <span aria-hidden="true">↗</span>
              </a>
            ),
          )}
        </nav>
      </header>
    </>
  );
}
function Overview() {
  return (
    <div
      className="overview"
      aria-label="Illustration of the proposed Cohesion platform"
    >
      <div className="overview-top">
        <span>
          <span className="mini-mark">C</span> Workspace overview
        </span>
        <span className="concept-label">PRODUCT CONCEPT</span>
      </div>
      <div className="overview-body">
        <div className="overview-title">
          <div>
            <span className="micro-label">YOUR PORTFOLIO. CONNECTED.</span>
            <h2>A clearer picture.</h2>
          </div>
          <Icon name="shield" />
        </div>
        <div className="overview-stats">
          <div>
            <span>Connected view</span>
            <strong>
              4 <small>product areas</small>
            </strong>
          </div>
          <div>
            <span>One evidence trail</span>
            <strong>
              End to end <span className="status-dot" />
            </strong>
          </div>
        </div>
        <div className="overview-table">
          <div className="table-labels">
            <span>PRODUCT AREA</span>
            <span>BRING INTO VIEW</span>
          </div>
          {products.map((p) => (
            <div className="overview-row" key={p.id}>
              <span>
                <Icon name={p.icon} />
                {p.name}
              </span>
              <span>
                {p.tags[0]} <b aria-hidden="true">↗</b>
              </span>
            </div>
          ))}
        </div>
        <div className="evidence-strip">
          <span className="evidence-check">✓</span>
          <div>
            <strong>Every decision starts with evidence.</strong>
            <span>Source records → shared understanding → clear action</span>
          </div>
        </div>
      </div>
      <div className="overview-foot">
        <span className="status-dot" /> Illustrative view · Platform in
        development
      </div>
    </div>
  );
}
function Hero() {
  return (
    <>
      <section className="new-hero">
        <div className="hero-grid">
          <div className="new-hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> PROPERTY MANAGEMENT & COMPLIANCE
            </p>
            <h1>
              Connected information.
              <br />
              <em>Confident decisions.</em>
            </h1>
            <p className="hero-description">
              Bring your property data, teams and evidence together. Understand
              your compliance position. Move the right work forward.
            </p>
            <div className="new-hero-actions">
              <a href="#platforms" className="button">
                Explore our products <span aria-hidden="true">↗</span>
              </a>
              <a href="#demo" className="text-button">
                Book a demo <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-rule" /> Built around people. Designed for
              safer homes.
            </div>
          </div>
          <Overview />
        </div>
        <div className="hero-bottom-line">
          <span>ONE CONNECTED VISION</span>
          <span>Property teams</span>
          <span>Compliance leaders</span>
          <span>Contractors & operatives</span>
        </div>
      </section>
      <section className="value-bar" aria-label="The Cohesion approach">
        <div>
          <span>01</span>
          <strong>Connect your information</strong>
          <p>Bring fragmented records into focus.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Understand your position</strong>
          <p>See the evidence and the exceptions.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Act with clarity</strong>
          <p>Give your teams a clear next step.</p>
        </div>
      </section>
    </>
  );
}
function Products() {
  return (
    <section id="platforms" className="products-section section">
      <div className="products-heading">
        <div>
          <span className="eyebrow">THE COHESION SUITE</span>
          <h2>
            Built for the work.
            <br />
            <em>Designed for the decision.</em>
          </h2>
        </div>
        <p>
          Choose the management ecosystem, individual compliance products, or a
          combination that fits your organisation.
        </p>
      </div>
      <div className="product-cards">
        {products.map((p, i) => (
          <a
            id={p.id}
            key={p.id}
            href={`${p.file}.html`}
            className="product-card"
          >
            <div className="product-card-top">
              <span className="product-icon">
                <Icon name={p.icon} />
              </span>
              <span className="product-number">0{i + 1}</span>
            </div>
            <span className="eyebrow">{p.category}</span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="product-tags">
              {p.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="card-link">
              Explore the product <span aria-hidden="true">↗</span>
            </div>
          </a>
        ))}
      </div>
      <div className="suite-note">
        <span className="status-dot" />
        <p>
          Start with one product. Build your suite as your priorities evolve.
        </p>
        <a href="#product-maturity">
          See our development stage <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="new-footer">
      <div className="footer-main">
        <div>
          <Logo />
          <p>People. Safety. Property. Clarity.</p>
        </div>
        <div>
          <span className="eyebrow">PRODUCTS</span>
          {products.map((p) => (
            <a key={p.id} href={`${p.file}.html`}>
              {p.name}
            </a>
          ))}
        </div>
        <div>
          <span className="eyebrow">COMPANY</span>
          <a href="index.html#mission">Our mission</a>
          <a href="index.html#founder">Meet the founder</a>
          <a href="index.html#product-maturity">Product development</a>
          <a href="index.html#engage">Partner with us</a>
        </div>
        <div>
          <span className="eyebrow">LET’S TALK</span>
          <a href="index.html#demo">Book a demo ↗</a>
          <a href="mailto:jessemensah21@gmail.com">jessemensah21@gmail.com</a>
          <a
            href="https://chat.google.com/app/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chat ↗
          </a>
        </div>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Cohesion</span>
        <span>Property management & compliance intelligence</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
export function tabKey(event) {
  const tabs = Array.from(
    event.currentTarget
      .closest('[role="tablist"]')
      .querySelectorAll('[role="tab"]'),
  );
  const current = tabs.indexOf(event.currentTarget);
  let next;
  if (["ArrowRight", "ArrowDown"].includes(event.key))
    next = (current + 1) % tabs.length;
  if (["ArrowLeft", "ArrowUp"].includes(event.key))
    next = (current + tabs.length - 1) % tabs.length;
  if (event.key === "Home") next = 0;
  if (event.key === "End") next = tabs.length - 1;
  if (next !== undefined) {
    event.preventDefault();
    tabs[next].click();
    tabs[next].focus();
  }
}
export default function App() {
  const file = location.pathname.split("/").pop() || "index.html";
  const routes = {
    "damp-and-mould.html": DampAndMould,
    "gas-compliance.html": GasCompliance,
    "electrical-compliance.html": ElectricalCompliance,
    "awaabs-law-compliance.html": AwaabsLawCompliance,
  };
  const Page = routes[file];
  const [stage, setStage] = useState(0);
  const [agent, setAgent] = useState(
    agentKeys.includes(location.hash.slice(1))
      ? location.hash.slice(1)
      : agentKeys[0],
  );
  useEffect(() => {
    document.body.classList.toggle("workflow-page", !!Page);
    document.body.classList.toggle("visual-workflow-page", !!Page);
    function hashChange() {
      const id = decodeURIComponent(location.hash.slice(1));
      if (agentKeys.includes(id)) setAgent(id);
      if (id)
        requestAnimationFrame(() =>
          document.getElementById(id)?.scrollIntoView(),
        );
    }
    hashChange();
    window.addEventListener("hashchange", hashChange);
    return () => window.removeEventListener("hashchange", hashChange);
  }, [Page]);
  function goTo(index) {
    setStage(index);
    requestAnimationFrame(() =>
      document
        .getElementById(`stage-panel-${index}`)
        ?.focus({ preventScroll: true }),
    );
  }
  return (
    <>
      <Header />
      {Page ? (
        <div id="main-content" tabIndex={-1}>
          <Page
            active={stage}
            setActive={setStage}
            onTabKey={tabKey}
            goTo={goTo}
          />
        </div>
      ) : (
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Products />
          <AiAgents active={agent} setActive={setAgent} onTabKey={tabKey} />
          <Mission />
          <Founder />
          <ProductMaturity />
          <Contact />
          <Engage />
        </main>
      )}
      <Footer />
    </>
  );
}
