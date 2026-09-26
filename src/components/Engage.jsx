import React from "react";
export default function Engage() {
  return (
    <section id="engage" className="engage-section section">
      <div className="section-top">
        <div>
          <div className="eyebrow">{"BUILD WITH COHESION"}</div>
          <h2>
            {"Three ways to"}
            <br />
            {"move the vision forward."}
          </h2>
        </div>
        <p>
          {
            "Property expertise, investment and technical collaboration can each help turn the product vision into practical tools."
          }
        </p>
      </div>
      <div className="engage-grid">
        <article>
          <span>{"FOR PROPERTY ORGANISATIONS"}</span>
          <h3>{"Become a design partner"}</h3>
          <p>
            {
              "Sign up as a design partner to help shape Cohesion around your team\u2019s needs\u2014and get discounted pricing when the product launches. Share your reporting and delivery challenges, review the workflows and help prioritise what gets built."
            }
          </p>
          <a
            href="https://chat.google.com/app/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Sign up as a design partner "}
            <b aria-hidden="true">{"\u2197"}</b>
          </a>
        </article>
        <article>
          <span>{"FOR INVESTORS"}</span>
          <h3>{"Discuss investment"}</h3>
          <p>
            {
              "Talk with Jesse about the product vision, the opportunity in property management and compliance, and the next stages of development."
            }
          </p>
          <a
            href="https://chat.google.com/app/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Discuss investment "}
            <b aria-hidden="true">{"\u2197"}</b>
          </a>
        </article>
        <article>
          <span>{"FOR COLLABORATORS"}</span>
          <h3>{"Explore collaboration"}</h3>
          <p>
            {
              "Bring expertise in housing, data integration, software engineering or AI to help develop the Cohesion ecosystem."
            }
          </p>
          <a
            href="https://chat.google.com/app/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Explore collaboration "}
            <b aria-hidden="true">{"\u2197"}</b>
          </a>
        </article>
      </div>
      <p className="engage-note">
        {
          "Partner sign-ups and enquiries start on Google Chat. Search for jessemensah21@gmail.com and message Jesse with your organisation and the conversation you\u2019d like to start. Discount details will be confirmed with you before launch."
        }
      </p>
    </section>
  );
}
