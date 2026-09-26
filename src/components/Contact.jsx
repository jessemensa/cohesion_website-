import React from "react";
export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section"
      aria-labelledby="contact-title"
    >
      <div className="section-top">
        <div>
          <div className="eyebrow">{"GET IN TOUCH"}</div>
          <h2 id="contact-title">
            {"Let\u2019s talk about"}
            <br />
            {"your properties and your priorities."}
          </h2>
        </div>
        <p>
          {
            "Whether you\u2019re exploring one product or the wider suite, start a conversation with Jesse."
          }
        </p>
      </div>
      <div className="contact-grid">
        <article className="contact-card">
          <span className="contact-kicker">{"START A CONVERSATION"}</span>
          <h3>{"Get in touch"}</h3>
          <p>
            {
              "Have a question about Cohesion, your data or a potential collaboration? Start a conversation on Google Chat. Search for Jesse using the email below."
            }
          </p>
          <p className="contact-address">
            <strong>{"jessemensah21@gmail.com"}</strong>
          </p>
          <a
            className="primary"
            href="https://chat.google.com/app/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Open Google Chat "}
            <span aria-hidden="true">{"\u2197"}</span>
          </a>
        </article>
        <article id="demo" className="contact-card demo-card">
          <span className="contact-kicker">{"SEE COHESION IN CONTEXT"}</span>
          <h3>{"Book a demo"}</h3>
          <p>
            {
              "Meet Jesse on Google Meet for a product walkthrough. Propose a time in Google Calendar and include your organisation and the product you\u2019re interested in."
            }
          </p>
          <div className="demo-products">
            <span>{"Damp & Mould"}</span>
            <span>{"Gas Compliance"}</span>
            <span>{"Electrical Compliance"}</span>
            <span>{"Awaab\u2019s Law Compliance"}</span>
          </div>
          <a
            className="primary"
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Cohesion+demo+with+Jesse&add=jessemensah21%40gmail.com&details=Proposed+Cohesion+product+walkthrough+with+Jesse.+Please+include+your+organisation+and+the+product+you+are+interested+in.+Time+is+subject+to+confirmation+by+Jesse.+Add+Google+Meet+video+conferencing+when+arranging+the+meeting%2C+or+agree+the+meeting+link+with+Jesse.&location=Google+Meet+%E2%80%94+link+to+be+arranged"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Propose a demo in Google Calendar "}
            <span aria-hidden="true">{"\u2197"}</span>
          </a>
          <small>
            {
              "Opens an event draft with jessemensah21@gmail.com as a guest. Choose a time and send the invitation. Jesse will confirm availability; arrange the Google Meet link with him."
            }
          </small>
          <a
            className="demo-chat-link"
            href="https://chat.google.com/app/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Prefer to arrange it on Google Chat? \u2197"}
          </a>
        </article>
      </div>
    </section>
  );
}
