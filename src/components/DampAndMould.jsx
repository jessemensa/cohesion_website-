import React from "react";
export default function DampAndMould({ active, setActive, onTabKey, goTo }) {
  return (
    <main>
      <section className="workflow-hero section product-damp">
        <a className="back-link" href="index.html#ecosystem">
          {"\u2190 Back to Damp & Mould"}
        </a>
        <div className="eyebrow">
          {"HOW IT WORKS / DAMP & MOULD PROPERTY MANAGEMENT"}
        </div>
        <h1>
          {"From the first report"}
          <br />
          {"to "}
          <em>{"coordinated action."}</em>
        </h1>
        <p>
          {
            "Connect reporting, computer vision, hazard triage, scheduling and delivery in one damp and mould workflow."
          }
        </p>
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
            {"Report"}
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
            {"Assess"}
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
            {"Schedule"}
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
            {"Deliver"}
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
            {"Understand"}
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
            <span className="diagram-caption">{"01 / REPORT"}</span>
            <div className="journey-graph">
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Tenant App"}</strong>
                  <span>{"Report an issue"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"CHM App"}</strong>
                  <span>{"Report on behalf of a tenant"}</span>
                </div>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Photos"}</strong>
                  <span>{"Visible damp & mould"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Tenant answers"}</strong>
                  <span>{"Property & household context"}</span>
                </div>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node hub">
                <strong>{"Damp & mould report"}</strong>
                <span>{"Images + answers"}</span>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 1 OF 5"}</span>
            <h3>{"Start with the people in the home."}</h3>
            <p>
              {
                "Tenants and CHM teams submit photographs and answers about the issue and household context. These inputs begin the same reporting journey."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>{"A report with photographs and tenant context"}</strong>
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
            <span className="diagram-caption">{"02 / ASSESS"}</span>
            <div className="journey-graph">
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Photos"}</strong>
                  <span>{"Image input"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Tenant answers"}</strong>
                  <span>{"Context input"}</span>
                </div>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Computer vision"}</strong>
                  <span>{"Categorise visible severity"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Tenant context"}</strong>
                  <span>{"Reported circumstances"}</span>
                </div>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span>{"combine"}</span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node hub">
                <strong>{"Hazard model"}</strong>
                <span>{"Severity + tenant answers"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node ">
                <strong>{"Property-team review"}</strong>
                <span>{"Review the assessment and priority"}</span>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 2 OF 5"}</span>
            <h3>{"Bring visual severity and tenant context together."}</h3>
            <p>
              {
                "Computer vision categorises visible severity. The hazard model combines that assessment with tenant answers to support triage and property-team review."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>{"A reviewed assessment for prioritising work"}</strong>
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
            <span className="diagram-caption">{"03 / SCHEDULE"}</span>
            <div className="journey-graph">
              <div className="journey-node hub">
                <strong>{"Property Management Platform"}</strong>
                <span>{"Review \u00b7 prioritise \u00b7 schedule"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span>{"job handover"}</span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-row">
                <div className="delivery-branch">
                  <div className="journey-node">
                    <strong>{"Operatives App"}</strong>
                    <span>{"In-house delivery"}</span>
                  </div>
                </div>
                <div className="delivery-branch">
                  <div className="journey-node">
                    <strong>{"Contractor Platform"}</strong>
                    <span>{"Coordinate contractor delivery"}</span>
                  </div>
                  <div className="journey-connector" aria-hidden="true">
                    <b>{"\u2193"}</b>
                  </div>
                  <div className="journey-node">
                    <strong>{"Contractor App"}</strong>
                    <span>{"Delivery team"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 3 OF 5"}</span>
            <h3>{"Turn the report into a coordinated job."}</h3>
            <p>
              {
                "The Property Management Platform brings the report and assessment into the scheduling process, then hands the job to the team carrying out the work."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>
                {"Assigned work with the context needed for delivery"}
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
            <span className="diagram-caption">{"04 / DELIVER"}</span>
            <div className="journey-graph">
              <div className="journey-node hub">
                <strong>{"Property Management Platform"}</strong>
                <span>{"Shared job context"}</span>
              </div>
              <div className="sync-label">
                {
                  "\u2195 Job details \u00b7 messages \u00b7 updates \u00b7 evidence"
                }
              </div>
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Operatives App"}</strong>
                  <span>{"In-house team"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Contractor Platform"}</strong>
                  <span>{"Coordination"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Contractor App"}</strong>
                  <span>{"Delivery team"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 4 OF 5"}</span>
            <h3>{"Keep the job and its conversations connected."}</h3>
            <p>
              {
                "Messaging sits alongside the work. Job details, progress and evidence move between property managers, operatives and contractor teams."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>{"Shared progress, messages and evidence"}</strong>
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
            <span className="diagram-caption">{"05 / UNDERSTAND"}</span>
            <div className="journey-graph">
              <div className="journey-node hub">
                <strong>{"Property Management Platform"}</strong>
                <span>{"Reporting, case and delivery activity"}</span>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-row">
                <div className="journey-node ">
                  <strong>{"Descriptive"}</strong>
                  <span>{"What happened?"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Diagnostic"}</strong>
                  <span>{"Why did it happen?"}</span>
                </div>
                <div className="journey-node ">
                  <strong>{"Predictive"}</strong>
                  <span>{"What could happen next?"}</span>
                </div>
              </div>
              <div className="journey-connector" aria-hidden="true">
                <span></span>
                <b>{"\u2193"}</b>
              </div>
              <div className="journey-node ">
                <strong>{"Property teams"}</strong>
                <span>{"Better-informed planning"}</span>
              </div>
            </div>
          </div>
          <div className="journey-explanation">
            <span className="stage-counter">{"STAGE 5 OF 5"}</span>
            <h3>{"See what happened and where to focus next."}</h3>
            <p>
              {
                "Bring work activity into descriptive, diagnostic and predictive analytics, so teams can understand performance and plan earlier interventions."
              }
            </p>
            <div className="stage-output">
              <span>{"WHAT MOVES FORWARD"}</span>
              <strong>
                {"Insights that support decisions and future work"}
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
      <section id="workflow-detail" className="damp-workflow section">
        <div className="workflow-steps">
          <article className="workflow-step">
            <span className="step-index">{"01"}</span>
            <div>
              <span className="step-role">
                {"Tenant Reporting App + CHM App"}
              </span>
              <h2>{"Report the issue"}</h2>
              <p>
                {
                  "Tenants and CHM teams report damp and mould issues, adding photographs and answers about the property and the people affected."
                }
              </p>
            </div>
          </article>
          <article className="workflow-step">
            <span className="step-index">{"02"}</span>
            <div>
              <span className="step-role">{"Computer vision model"}</span>
              <h2>{"Assess visible severity"}</h2>
              <p>
                {
                  "The computer vision model assesses the submitted images and categorises visible damp and mould severity."
                }
              </p>
            </div>
          </article>
          <article className="workflow-step">
            <span className="step-index">{"03"}</span>
            <div>
              <span className="step-role">
                {"Tenant answers + severity assessment"}
              </span>
              <h2>{"Categorise the hazard"}</h2>
              <p>
                {
                  "The hazard model combines tenant answers with the visual severity assessment to support triage and prioritisation. Assessments support review by the property team."
                }
              </p>
            </div>
          </article>
          <article className="workflow-step">
            <span className="step-index">{"04"}</span>
            <div>
              <span className="step-role">
                {"Property Management Platform"}
              </span>
              <h2>{"Schedule and hand over the job"}</h2>
              <p>
                {
                  "Property teams review the report, schedule activity and hand jobs to operatives or contractors, with the information needed to carry out the work."
                }
              </p>
            </div>
          </article>
          <article className="workflow-step">
            <span className="step-index">{"05"}</span>
            <div>
              <span className="step-role">
                {"Operatives App + Contractor App + Contractor Platform"}
              </span>
              <h2>{"Coordinate the work"}</h2>
              <p>
                {
                  "In-app messaging keeps teams connected. Job details, updates and evidence move between the apps, the Contractor Platform and the Property Management Platform."
                }
              </p>
            </div>
          </article>
          <article className="workflow-step">
            <span className="step-index">{"06"}</span>
            <div>
              <span className="step-role">
                {"Property Management Platform analytics"}
              </span>
              <h2>{"Understand performance and plan ahead"}</h2>
              <p>
                {
                  "Descriptive analytics show what happened. Diagnostic analytics help explain why. Predictive analytics identify potential future risks and delays."
                }
              </p>
            </div>
          </article>
        </div>
        <aside className="coordination-panel">
          <div className="eyebrow">{"CONNECTED THROUGHOUT"}</div>
          <h2>
            {"One job."}
            <br />
            {"Everyone in sync."}
          </h2>
          <p>
            {
              "Seamless data transfer and integration keep the people managing and delivering the work connected. "
            }
          </p>
          <div className="coordination-list">
            <span>{"Property Management Platform"}</span>
            <span>{"Operatives App"}</span>
            <span>{"Contractor App"}</span>
            <span>{"Contractor Platform"}</span>
          </div>
          <h3>{"Messaging inside the apps"}</h3>
          <p>
            {
              "Keep questions, updates and handovers in the context of the work."
            }
          </p>
          <h3>{"Information moves with the job"}</h3>
          <p>
            {
              "Share job details, progress and evidence across connected teams and platforms."
            }
          </p>
          <p className="architecture-note">
            {
              "Proposed product workflow. AI assessments support human review; integration availability depends on implementation."
            }
          </p>
        </aside>
      </section>
      <section className="workflow-agents section">
        <div className="eyebrow">{"PLANNED AI AGENTS"}</div>
        <h2>
          {"Focused help for"}
          <br />
          {"your damp and mould workflow."}
        </h2>
        <div className="workflow-agent-grid damp-agent-grid">
          <article>
            <span>{"01"}</span>
            <h3>{"Report completeness agent"}</h3>
            <p>
              {
                "Checks for required photos and answers, then asks for missing information before the report moves forward. Helps tenants and CHM teams provide the context property teams need."
              }
            </p>
            <div className="agent-mini-flow">
              <div>
                <span>{"INPUT"}</span>
                <strong>{"Photos + Tenant answers"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div className="mini-task">
                <span>{"AGENT TASK"}</span>
                <strong>{"Check required information"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div>
                <span>{"OUTPUT"}</span>
                <strong>{"A more complete report for review"}</strong>
              </div>
            </div>
            <a href="index.html#report-completeness">
              {"Explore this agent \u2197"}
            </a>
          </article>
          <article>
            <span>{"02"}</span>
            <h3>{"Appointment & scheduling agent"}</h3>
            <p>
              {
                "Suggests suitable slots using availability, job requirements and tenant preferences. Answers questions about scheduling rules, previews the likely effects of a proposed change and applies specifically approved changes through connected scheduling tools."
              }
            </p>
            <div className="agent-mini-flow">
              <div>
                <span>{"INPUT"}</span>
                <strong>{"Jobs & availability + Tenant preferences"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div className="mini-task">
                <span>{"AGENT TASK"}</span>
                <strong>{"Compare suitable slots"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div>
                <span>{"OUTPUT"}</span>
                <strong>{"A proposed schedule and impact summary"}</strong>
              </div>
            </div>
            <a href="index.html#scheduling-agent">
              {"Explore this agent \u2197"}
            </a>
          </article>
          <article>
            <span>{"06"}</span>
            <h3>{"Job assistant agent"}</h3>
            <p>
              {
                "Helps contractors and operatives understand the job, find approved work instructions and see what to record during a visit. Answers questions using the job history, prompts for missing photos and notes, and flags issues for the property team to review."
              }
            </p>
            <div className="agent-mini-flow">
              <div>
                <span>{"INPUT"}</span>
                <strong>{"Job history + Approved work instructions"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div className="mini-task">
                <span>{"AGENT TASK"}</span>
                <strong>{"Answer job questions and check evidence"}</strong>
              </div>
              <b aria-hidden="true">{"\u2193"}</b>
              <div>
                <span>{"OUTPUT"}</span>
                <strong>{"Clear next steps and a completion checklist"}</strong>
              </div>
            </div>
            <a href="index.html#job-assistant">{"Explore this agent \u2197"}</a>
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
        <div className="eyebrow">{"PROPERTY MANAGEMENT ANALYTICS"}</div>
        <h2>
          {"See what happened."}
          <br />
          {"Understand why. Plan what comes next."}
        </h2>
        <div className="result-grid">
          <div className="flow-node">
            <h3>{"Descriptive"}</h3>
            <p>
              {
                "What is happening? View reported issues, case progress and work activity."
              }
            </p>
          </div>
          <div className="flow-node">
            <h3>{"Diagnostic"}</h3>
            <p>
              {
                "Why is it happening? Explore delays, repeat issues and handover gaps."
              }
            </p>
          </div>
          <div className="flow-node">
            <h3>{"Predictive"}</h3>
            <p>
              {
                "What might happen next? Identify potential risks and cases that may need earlier attention."
              }
            </p>
          </div>
        </div>
        <a className="workflow-link" href="index.html#ecosystem">
          {"Explore the damp & mould product "}
          <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
    </main>
  );
}
