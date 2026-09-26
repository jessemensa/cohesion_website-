import React from "react";
export default function GasCompliance({ active, setActive, onTabKey, goTo }) {
  return (
    <main>
      <section className="workflow-hero section product-gas">
        <a className="back-link" href="index.html#gas">
          {"\u2190 Back to Gas Compliance"}
        </a>
        <div className="eyebrow">{"HOW IT WORKS / GAS COMPLIANCE"}</div>
        <h1>
          {"From connected data"}
          <br />
          {"to "}
          <em>{"clear action."}</em>
        </h1>
        <p>
          {
            "Connect all your data sources to establish an accurate gas compliance position, backed by evidence and clearly identified exceptions."
          }
        </p>
        <div className="workflow-context">
          <strong>{"Built around your compliance area"}</strong>
          <span>
            {
              "Properties, gas responsibility, servicing, appointments and certificates."
            }
          </span>
        </div>
      </section>
      <section
        className="visual-journey section"
        aria-labelledby="journey-title"
      >
        <div className="journey-heading">
          <div>
            <div className="eyebrow">{"EXPLORE THE WORKFLOW"}</div>
            <h2 id="journey-title">{"See how it comes together."}</h2>
          </div>
          <p>
            {
              "Select a stage to follow the information, the decisions and the next handover."
            }
          </p>
        </div>
        <div
          className="journey-tabs"
          role="tablist"
          aria-label="Workflow stages"
        >
          <button
            type="button"
            role="tab"
            id="stage-tab-0"
            aria-controls="stage-panel-0"
            data-stage="0"
            aria-selected={active === 0}
            tabIndex={active === 0 ? 0 : -1}
            onClick={() => setActive(0)}
            onKeyDown={onTabKey}
          >
            <span>{"01"}</span>
            {"Connect"}
          </button>
          <button
            type="button"
            role="tab"
            id="stage-tab-1"
            aria-controls="stage-panel-1"
            data-stage="1"
            aria-selected={active === 1}
            tabIndex={active === 1 ? 0 : -1}
            onClick={() => setActive(1)}
            onKeyDown={onTabKey}
          >
            <span>{"02"}</span>
            {"Unify"}
          </button>
          <button
            type="button"
            role="tab"
            id="stage-tab-2"
            aria-controls="stage-panel-2"
            data-stage="2"
            aria-selected={active === 2}
            tabIndex={active === 2 ? 0 : -1}
            onClick={() => setActive(2)}
            onKeyDown={onTabKey}
          >
            <span>{"03"}</span>
            {"Assess"}
          </button>
          <button
            type="button"
            role="tab"
            id="stage-tab-3"
            aria-controls="stage-panel-3"
            data-stage="3"
            aria-selected={active === 3}
            tabIndex={active === 3 ? 0 : -1}
            onClick={() => setActive(3)}
            onKeyDown={onTabKey}
          >
            <span>{"04"}</span>
            {"Anticipate"}
          </button>
          <button
            type="button"
            role="tab"
            id="stage-tab-4"
            aria-controls="stage-panel-4"
            data-stage="4"
            aria-selected={active === 4}
            tabIndex={active === 4 ? 0 : -1}
            onClick={() => setActive(4)}
            onKeyDown={onTabKey}
          >
            <span>{"05"}</span>
            {"Act"}
          </button>
        </div>
        <div
          className="journey-panel"
          role="tabpanel"
          id="stage-panel-0"
          aria-labelledby="stage-tab-0"
          tabIndex="0"
          hidden={active !== 0}
        >
          <div className="journey-canvas">
            <span className="diagram-caption">{"01 / CONNECT"}</span>
            <div className="journey-graph">
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"NEC"}</strong>
                  <span>{"Property records"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Salesforce"}</strong>
                  <span>{"Jobs & appointments"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"C365"}</strong>
                  <span>{"Compliance records"}</span>
                </div>
              </div>
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Contractor systems"}</strong>
                  <span>{"Delivery information"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"SharePoint"}</strong>
                  <span>{"Documents"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Other sources"}</strong>
                  <span>{"Additional records"}</span>
                </div>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span>{"integrate"}</span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node hub">
                <strong>{"Data Integration Layer"}</strong>
                <span>{"Collect the records in one flow"}</span>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 1 OF 5"}</span>
            <h3>{"Bring every source into view."}</h3>
            <p>
              {
                "Connect your existing systems so property and compliance information can be considered together. "
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>{"Connected source records"}</strong>
            </div>
            <div className="stage-controls">
              <button type="button" data-go="1" onClick={() => goTo(1)}>
                {"Next stage \u2192"}
              </button>
            </div>
          </div>
        </div>
        <div
          className="journey-panel"
          role="tabpanel"
          id="stage-panel-1"
          aria-labelledby="stage-tab-1"
          tabIndex="0"
          hidden={active !== 1}
        >
          <div className="journey-canvas">
            <span className="diagram-caption">{"02 / UNIFY"}</span>
            <div className="journey-graph">
              <div className="journey-node ">
                <strong>{"Canonical Data Model"}</strong>
                <span>{"One consistent structure"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node ">
                <strong>{"Identity Resolution"}</strong>
                <span>{"Match the same property across sources"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node">
                <strong>{"Ontology"}</strong>
                <span>{"Define relationships"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node">
                <strong>{"Knowledge Graph"}</strong>
                <span>{"Connect records & evidence"}</span>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 2 OF 5"}</span>
            <h3>{"Make the records mean the same thing."}</h3>
            <p>
              {
                "Standardise different formats, match records to the same entities and connect their relationships. A consistent model helps teams see one property across multiple systems."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>{"A connected property and compliance picture"}</strong>
            </div>
            <div className="stage-controls">
              <button type="button" data-go="0" onClick={() => goTo(0)}>
                {"\u2190 Previous"}
              </button>
              <button type="button" data-go="2" onClick={() => goTo(2)}>
                {"Next stage \u2192"}
              </button>
            </div>
          </div>
        </div>
        <div
          className="journey-panel"
          role="tabpanel"
          id="stage-panel-2"
          aria-labelledby="stage-tab-2"
          tabIndex="0"
          hidden={active !== 2}
        >
          <div className="journey-canvas">
            <span className="diagram-caption">{"03 / ASSESS"}</span>
            <div className="journey-graph">
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Semantic Layer"}</strong>
                  <span>{"Consistent definitions"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Process Intelligence"}</strong>
                  <span>{"Events & handovers"}</span>
                </div>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span>{"assess"}</span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node hub">
                <strong>{"Compliance Engine"}</strong>
                <span>{"Gas compliance position"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node ">
                <strong>{"Evidence Engine"}</strong>
                <span>{"Trace the assessment to source records"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-row">
                <div className="journey-node evidence">
                  <strong>{"Evidence"}</strong>
                  <span>{"Certificates"}</span>
                </div>
                <div className="journey-node exception">
                  <strong>{"Exceptions"}</strong>
                  <span>{"Missing certificate"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 3 OF 5"}</span>
            <h3>{"Establish the position\u2014and show why."}</h3>
            <p>
              {
                "Combine consistent measures with the sequence of activity. Assess compliance, then link the result to its evidence and identify exceptions."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>
                {"A compliance position with evidence and exceptions"}
              </strong>
            </div>
            <div className="stage-controls">
              <button type="button" data-go="1" onClick={() => goTo(1)}>
                {"\u2190 Previous"}
              </button>
              <button type="button" data-go="3" onClick={() => goTo(3)}>
                {"Next stage \u2192"}
              </button>
            </div>
          </div>
        </div>
        <div
          className="journey-panel"
          role="tabpanel"
          id="stage-panel-3"
          aria-labelledby="stage-tab-3"
          tabIndex="0"
          hidden={active !== 3}
        >
          <div className="journey-canvas">
            <span className="diagram-caption">{"04 / ANTICIPATE"}</span>
            <div className="journey-graph">
              <div className="journey-node ">
                <strong>{"Pattern Intelligence"}</strong>
                <span>
                  {"Overdue servicing \u00b7 trends \u00b7 recurring gaps"}
                </span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node hub">
                <strong>{"AI / ML"}</strong>
                <span>{"Service due dates and activity in context"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Explain"}</strong>
                  <span>{"Why this position?"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Predict"}</strong>
                  <span>{"What might happen?"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Recommend"}</strong>
                  <span>{"What should be reviewed?"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 4 OF 5"}</span>
            <h3>{"Turn patterns into useful insight."}</h3>
            <p>
              {
                "Find recurring gaps and unusual activity. Use AI and machine learning to explain the position, anticipate risks and suggest next steps for review."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>{"Prioritised insights and proposed next steps"}</strong>
            </div>
            <div className="stage-controls">
              <button type="button" data-go="2" onClick={() => goTo(2)}>
                {"\u2190 Previous"}
              </button>
              <button type="button" data-go="4" onClick={() => goTo(4)}>
                {"Next stage \u2192"}
              </button>
            </div>
          </div>
        </div>
        <div
          className="journey-panel"
          role="tabpanel"
          id="stage-panel-4"
          aria-labelledby="stage-tab-4"
          tabIndex="0"
          hidden={active !== 4}
        >
          <div className="journey-canvas">
            <span className="diagram-caption">{"05 / ACT"}</span>
            <div className="journey-graph">
              <div className="journey-node hub">
                <strong>{"Action Engine"}</strong>
                <span>{"Prioritised follow-up"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span>{"coordinate"}</span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Property teams"}</strong>
                  <span>{"Review & assign"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Delivery teams"}</strong>
                  <span>{"Follow up work"}</span>
                </div>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node ">
                <strong>{"Connected systems"}</strong>
                <span>{"Service records \u00b7 progress \u00b7 evidence"}</span>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 5 OF 5"}</span>
            <h3>{"Give the right team a clear next step."}</h3>
            <p>
              {
                "Turn recommendations into coordinated follow-up, with the supporting information available to the people responsible."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>
                {"Actions connected to the records that prompted them"}
              </strong>
            </div>
            <div className="stage-controls">
              <button type="button" data-go="3" onClick={() => goTo(3)}>
                {"\u2190 Previous"}
              </button>
              <a href="#workflow-detail">{"See the full workflow \u2193"}</a>
            </div>
          </div>
        </div>
      </section>
      <section id="workflow-detail" className="architecture section">
        <div className="architecture-intro">
          <div className="eyebrow">{"THE COMPLETE ARCHITECTURE"}</div>
          <h2>
            {"Connect. Understand."}
            <br />
            {"Prove. Act."}
          </h2>
          <p>
            {
              "Follow the information from its source through a shared model, compliance assessment and evidence to the next action."
            }
          </p>
          <p className="architecture-note">
            {
              "Proposed product architecture. Connector availability and implementation depend on the systems and access in your environment."
            }
          </p>
        </div>
        <div
          className="flow-diagram"
          aria-label="Gas Compliance architecture, in processing order"
        >
          <div className="flow-layer">
            <div className="source-group">
              <span className="flow-label">{"YOUR DATA SOURCES"}</span>
              <div className="source-grid">
                <span>{"NEC"}</span>
                <span>{"Salesforce"}</span>
                <span>{"C365"}</span>
                <span>{"Contractor Systems"}</span>
                <span>{"SharePoint sites"}</span>
                <span>{"Other data sources"}</span>
              </div>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Data Integration Layer"}</h3>
              <p>
                {
                  "Bring information together from connected systems and data sources."
                }
              </p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Canonical Data Model"}</h3>
              <p>
                {"Map different source formats into one consistent structure."}
              </p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Identity Resolution"}</h3>
              <p>
                {
                  "Match records referring to the same property, case, visit or organisation."
                }
              </p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Ontology"}</h3>
              <p>
                {
                  "Define the entities, responsibilities and relationships relevant to compliance."
                }
              </p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Knowledge Graph"}</h3>
              <p>
                {
                  "Connect those entities and their evidence into a traceable picture."
                }
              </p>
            </div>
          </div>
          <div className="flow-layer flow-branch">
            <div className="flow-node">
              <h3>{"Semantic Layer"}</h3>
              <p>
                {"Provide consistent definitions and measures for reporting."}
              </p>
            </div>
            <div className="flow-node">
              <h3>{"Process Intelligence"}</h3>
              <p>
                {"Understand the sequence of events, handovers and delays."}
              </p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Compliance Engine"}</h3>
              <p>
                {
                  "Assess gas compliance using the connected property and service records."
                }
              </p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Evidence Engine"}</h3>
              <p>
                {
                  "Link the compliance position to its supporting records and flag missing or conflicting evidence."
                }
              </p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Pattern Intelligence"}</h3>
              <p>
                {"Identify recurring exceptions, trends and unusual activity."}
              </p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"AI / ML"}</h3>
              <p>
                {
                  "Identify upcoming service risks, explain gaps and recommend follow-up activity."
                }
              </p>
            </div>
          </div>
          <div className="flow-layer flow-branch outcomes">
            <div className="flow-node">
              <h3>{"Explain"}</h3>
              <p>{"Understand the position and its exceptions."}</p>
            </div>
            <div className="flow-node">
              <h3>{"Predict"}</h3>
              <p>{"Anticipate potential risks and delays."}</p>
            </div>
            <div className="flow-node">
              <h3>{"Recommend"}</h3>
              <p>{"Prioritise the next steps for review."}</p>
            </div>
          </div>
          <div className="flow-layer">
            <div className="flow-node">
              <h3>{"Action Engine"}</h3>
              <p>
                {
                  "Turn findings into prioritised actions and coordinated follow-up across connected teams and systems."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="workflow-agents section">
        <div className="eyebrow">{"PLANNED AI AGENTS"}</div>
        <h2>
          {"Focused help for"}
          <br />
          {"your gas compliance workflow."}
        </h2>
        <div className="workflow-agent-grid">
          <article>
            <span>{"03"}</span>
            <h3>{"Evidence gap agent"}</h3>
            <p>
              {
                "Checks connected records for required supporting documents and produces a focused list of gaps, with links to the affected properties or cases."
              }
            </p>
            <div className="agent-mini-flow">
              <div>
                <span>{"INPUT"}</span>
                <strong>{"Completed activity + Required documents"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div className="mini-task">
                <span>{"AGENT TASK"}</span>
                <strong>{"Check the evidence trail"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div>
                <span>{"OUTPUT"}</span>
                <strong>{"A focused list of gaps to follow up"}</strong>
              </div>
            </div>
            <a href="index.html#evidence-gap">{"Explore this agent \u2197"}</a>
          </article>
          <article>
            <span>{"04"}</span>
            <h3>{"Exception explanation agent"}</h3>
            <p>
              {
                "Explains conflicting dates, statuses and records in plain language. Shows the sources behind each exception and what your team needs to investigate."
              }
            </p>
            <div className="agent-mini-flow">
              <div>
                <span>{"INPUT"}</span>
                <strong>{"Source records + Compliance figures"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div className="mini-task">
                <span>{"AGENT TASK"}</span>
                <strong>{"Compare and explain differences"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div>
                <span>{"OUTPUT"}</span>
                <strong>{"An explanation linked to its source records"}</strong>
              </div>
            </div>
            <a href="index.html#exception-explanation">
              {"Explore this agent \u2197"}
            </a>
          </article>
          <article>
            <span>{"05"}</span>
            <h3>{"Data insights & Excel agent"}</h3>
            <p>
              {
                "Answers questions that can be supported by your connected, authorised data. Explores patterns, explains results and prepares the supporting rows and summaries for export to Excel, including filters and source context."
              }
            </p>
            <div className="agent-mini-flow">
              <div>
                <span>{"INPUT"}</span>
                <strong>{"Your question + Authorised data"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div className="mini-task">
                <span>{"AGENT TASK"}</span>
                <strong>{"Query, explain and prepare export"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div>
                <span>{"OUTPUT"}</span>
                <strong>{"A traceable answer and export-ready data"}</strong>
              </div>
            </div>
            <a href="index.html#data-insights">{"Explore this agent \u2197"}</a>
          </article>
        </div>
        <p className="agent-status">
          {
            "Proposed product capabilities. Availability will be confirmed as development progresses."
          }
        </p>
      </section>
      <section className="workflow-result section">
        <div className="eyebrow">{"THE RESULT"}</div>
        <h2>{"A compliance position you can trace."}</h2>
        <div className="result-grid">
          <div className="flow-node">
            <h3>{"Position"}</h3>
            <p>{"Understand where you stand for gas compliance."}</p>
          </div>
          <div className="flow-node">
            <h3>{"Evidence"}</h3>
            <p>{"See the records supporting the assessment."}</p>
          </div>
          <div className="flow-node">
            <h3>{"Exceptions"}</h3>
            <p>
              {"See missing information, conflicts and outstanding actions."}
            </p>
          </div>
        </div>
        <a className="workflow-link" href="index.html#platforms">
          {"Explore all products "}
          <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
    </main>
  );
}
