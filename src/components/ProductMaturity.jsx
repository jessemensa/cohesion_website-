import React from "react";
export default function ProductMaturity() {
  return (
    <section id="product-maturity" className="maturity-section section">
      <div className="section-top">
        <div>
          <div className="eyebrow">{"WHERE WE ARE TODAY"}</div>
          <h2>
            {"A clear vision."}
            <br />
            {"An honest view of progress."}
          </h2>
        </div>
        <p>
          {
            "Cohesion is being built by a solo founder. The walkthroughs explain the product direction; they are not a demonstration of live customer deployments."
          }
        </p>
      </div>
      <div className="maturity-grid">
        <article>
          <span className="maturity-status">{"AVAILABLE NOW"}</span>
          <h3>{"Product exploration"}</h3>
          <p>
            {
              "Explore the product walkthroughs and speak directly with Jesse about your workflows, data challenges and priorities."
            }
          </p>
          <a href="#demo">{"Arrange a product conversation \u2197"}</a>
        </article>
        <article>
          <span className="maturity-status">{"BEING DEVELOPED"}</span>
          <h3>{"The Cohesion product suite"}</h3>
          <p>
            {
              "The damp and mould ecosystem and compliance intelligence products are the focus of the build. Ask Jesse for the current implementation scope and what can be demonstrated."
            }
          </p>
          <a href="#engage">{"Help shape the products \u2197"}</a>
        </article>
        <article>
          <span className="maturity-status">
            {"PLANNED PRODUCT CAPABILITIES"}
          </span>
          <h3>{"The connected workflow"}</h3>
          <p>
            {
              "The proposed architecture includes system integrations, AI-assisted assessment, task-specific AI agents and coordinated action. Availability and rollout dates are not announced here."
            }
          </p>
          <a href="gas-compliance.html">
            {"Explore the proposed architecture \u2197"}
          </a>
        </article>
      </div>
    </section>
  );
}
