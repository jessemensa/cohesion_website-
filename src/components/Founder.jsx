import React from "react";
export default function Founder() {
  return (
    <section
      id="founder"
      className="founder-section section"
      aria-labelledby="founder-title"
    >
      <div className="founder-profile">
        <div className="eyebrow">{"MEET THE FOUNDER"}</div>
        <img
          className="founder-photo"
          src="assets/jesse-founder.jpg"
          alt="Jesse, founder of Cohesion"
          width="1280"
          height="1600"
          loading="lazy"
          decoding="async"
        />
        <h2 id="founder-title">{"Hi, I\u2019m Jesse."}</h2>
        <p className="founder-role">{"Founder of Cohesion"}</p>
        <a
          className="founder-link"
          href="https://chat.google.com/app/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Chat with me on Google Chat "}
          <span aria-hidden="true">{"\u2197"}</span>
        </a>
        <p className="chat-address">
          {"Search Google Chat for"}
          <br />
          <strong>{"jessemensah21@gmail.com"}</strong>
        </p>
      </div>
      <div className="founder-story">
        <span className="founder-label">{"EXPERIENCE BEHIND THE PRODUCT"}</span>
        <h3>
          {"Built from experience"}
          <br />
          {"in property management data."}
        </h3>
        <p>
          {
            "I have over four years of experience as a data analyst in property management, working on compliance reporting and damp and mould reporting."
          }
        </p>
        <p>
          {
            "That reporting experience is the foundation for Cohesion, bringing property information, work activity and evidence into a clearer picture, while helping teams identify gaps and decide what needs attention."
          }
        </p>
        <p>
          {
            "I am building Cohesion as a solo founder at the moment. I am looking to work with property teams and collaborators to shape the products around real reporting and delivery challenges."
          }
        </p>
        <div className="founder-facts">
          <div>
            <strong>{"4+ years"}</strong>
            <span>{"Property management data experience"}</span>
          </div>
          <div>
            <strong>{"Solo founder"}</strong>
            <span>{"Building Cohesion"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
