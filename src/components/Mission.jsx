import React from "react";
export default function Mission() {
  return (
    <section
      id="mission"
      className="mission section"
      aria-labelledby="mission-title"
    >
      <div className="mission-label">
        <div className="eyebrow">{"OUR MISSION"}</div>
      </div>
      <div className="mission-content">
        <h2 id="mission-title">
          {"People, Safety,"}
          <br />
          <em>{"Property and Clarity."}</em>
        </h2>
        <p className="mission-statement">
          {
            "Our mission is to help property teams protect people and manage safer homes. We connect property information, teams and evidence so they can understand risks, see their compliance position and act with clarity."
          }
        </p>
        <p className="mission-support">
          {
            "People come first. Safety guides the work. Property information provides the context. Clarity helps teams take the next step."
          }
        </p>
      </div>
    </section>
  );
}
