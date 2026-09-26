import React from "react";
export default function AiAgents({ active, setActive, onTabKey }) {
  return (
    <section
      id="ai-agents"
      className="ai-agents section"
      aria-labelledby="agents-title"
    >
      <div className="section-top">
        <div>
          <div className="eyebrow">{"COHESION AI AGENTS"}</div>
          <h2 id="agents-title">
            {"Specific tasks."}
            <br />
            {"More time for your team."}
          </h2>
        </div>
        <p>
          {
            "Focused assistants within the products you choose. Improve reports, coordinate appointments, find missing evidence and turn questions into useful answers."
          }
        </p>
      </div>
      <p className="agent-status">
        {
          "Planned capabilities \u00b7 Being designed as part of the Cohesion product suite"
        }
      </p>
      <div className="agent-explorer">
        <div
          className="agent-selector"
          role="tablist"
          aria-label="Explore AI agents"
          aria-orientation="vertical"
        >
          <button
            type="button"
            role="tab"
            id="report-completeness"
            data-agent="report-completeness"
            aria-controls="panel-report-completeness"
            aria-selected={active === "report-completeness"}
            tabIndex={active === "report-completeness" ? 0 : -1}
            onClick={() => setActive("report-completeness")}
            onKeyDown={onTabKey}
          >
            <span className="agent-badge">{"01"}</span>
            <span>
              <strong>{"Report completeness"}</strong>
              <small>{"Damp & mould"}</small>
            </span>
            <b aria-hidden="true">{"\u2197"}</b>
          </button>
          <button
            type="button"
            role="tab"
            id="scheduling-agent"
            data-agent="scheduling-agent"
            aria-controls="panel-scheduling-agent"
            aria-selected={active === "scheduling-agent"}
            tabIndex={active === "scheduling-agent" ? 0 : -1}
            onClick={() => setActive("scheduling-agent")}
            onKeyDown={onTabKey}
          >
            <span className="agent-badge">{"02"}</span>
            <span>
              <strong>{"Appointment scheduling"}</strong>
              <small>{"Damp & mould"}</small>
            </span>
            <b aria-hidden="true">{"\u2197"}</b>
          </button>
          <button
            type="button"
            role="tab"
            id="evidence-gap"
            data-agent="evidence-gap"
            aria-controls="panel-evidence-gap"
            aria-selected={active === "evidence-gap"}
            tabIndex={active === "evidence-gap" ? 0 : -1}
            onClick={() => setActive("evidence-gap")}
            onKeyDown={onTabKey}
          >
            <span className="agent-badge">{"03"}</span>
            <span>
              <strong>{"Evidence gaps"}</strong>
              <small>{"Gas \u00b7 Electrical \u00b7 Awaab\u2019s Law"}</small>
            </span>
            <b aria-hidden="true">{"\u2197"}</b>
          </button>
          <button
            type="button"
            role="tab"
            id="exception-explanation"
            data-agent="exception-explanation"
            aria-controls="panel-exception-explanation"
            aria-selected={active === "exception-explanation"}
            tabIndex={active === "exception-explanation" ? 0 : -1}
            onClick={() => setActive("exception-explanation")}
            onKeyDown={onTabKey}
          >
            <span className="agent-badge">{"04"}</span>
            <span>
              <strong>{"Exception explanations"}</strong>
              <small>{"Gas \u00b7 Electrical \u00b7 Awaab\u2019s Law"}</small>
            </span>
            <b aria-hidden="true">{"\u2197"}</b>
          </button>
          <button
            type="button"
            role="tab"
            id="data-insights"
            data-agent="data-insights"
            aria-controls="panel-data-insights"
            aria-selected={active === "data-insights"}
            tabIndex={active === "data-insights" ? 0 : -1}
            onClick={() => setActive("data-insights")}
            onKeyDown={onTabKey}
          >
            <span className="agent-badge">{"05"}</span>
            <span>
              <strong>{"Insights"}</strong>
              <small>{"All four products"}</small>
            </span>
            <b aria-hidden="true">{"\u2197"}</b>
          </button>
          <button
            type="button"
            role="tab"
            id="job-assistant"
            data-agent="job-assistant"
            aria-controls="panel-job-assistant"
            aria-selected={active === "job-assistant"}
            tabIndex={active === "job-assistant" ? 0 : -1}
            onClick={() => setActive("job-assistant")}
            onKeyDown={onTabKey}
          >
            <span className="agent-badge">{"06"}</span>
            <span>
              <strong>{"Job assistant"}</strong>
              <small>{"Damp & mould \u00b7 Delivery teams"}</small>
            </span>
            <b aria-hidden="true">{"\u2197"}</b>
          </button>
        </div>
        <div className="agent-panels">
          <article
            className="agent-visual-panel"
            role="tabpanel"
            tabIndex="0"
            id="panel-report-completeness"
            aria-labelledby="report-completeness"
            hidden={active !== "report-completeness"}
          >
            <div className="agent-panel-title">
              <div>
                <span>{"PLANNED AGENT / DAMP & MOULD"}</span>
                <h3>{"Report completeness agent"}</h3>
              </div>
              <span className="illustration-label">
                {"Illustrative workflow"}
              </span>
            </div>
            <div className="agent-visual-layout">
              <div className="agent-diagram">
                <div className="agent-inputs">
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Photos"}</strong>
                  </div>
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Tenant answers"}</strong>
                  </div>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-task">
                  <span>{"ONE FOCUSED TASK"}</span>
                  <strong>{"Check required information"}</strong>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-result">
                  <span className="result-caption">
                    {"ILLUSTRATIVE RESULT"}
                  </span>
                  <div className="agent-result-row">
                    <span className="result-mark ok" aria-hidden="true">
                      {"\u2713"}
                    </span>
                    <div>
                      <strong>{"Present"}</strong>
                      <span>{"Issue description"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark missing" aria-hidden="true">
                      {"!"}
                    </span>
                    <div>
                      <strong>{"Missing"}</strong>
                      <span>{"Room location"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark next" aria-hidden="true">
                      {"\u2192"}
                    </span>
                    <div>
                      <strong>{"Next step"}</strong>
                      <span>{"Ask the reporter to add the room"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agent-story">
                <h4>{"Better reports. Fewer follow-up questions."}</h4>
                <p>
                  {
                    "Checks for required photos and answers, then asks for missing information before the report moves forward. Helps tenants and CHM teams provide the context property teams need."
                  }
                </p>
                <div className="agent-prompt">
                  <span>{"YOU COULD ASK"}</span>
                  <p>
                    {
                      "\u201cCheck this report and tell me what information is missing.\u201d"
                    }
                  </p>
                </div>
                <div className="agent-delivers">
                  <span>{"YOUR TEAM RECEIVES"}</span>
                  <strong>{"A more complete report for review"}</strong>
                </div>
              </div>
            </div>
          </article>
          <article
            className="agent-visual-panel"
            role="tabpanel"
            tabIndex="0"
            id="panel-scheduling-agent"
            aria-labelledby="scheduling-agent"
            hidden={active !== "scheduling-agent"}
          >
            <div className="agent-panel-title">
              <div>
                <span>{"PLANNED AGENT / DAMP & MOULD"}</span>
                <h3>{"Appointment & scheduling agent"}</h3>
              </div>
              <span className="illustration-label">
                {"Illustrative workflow"}
              </span>
            </div>
            <div className="agent-visual-layout">
              <div className="agent-diagram">
                <div className="agent-inputs">
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Jobs & availability"}</strong>
                  </div>
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Tenant preferences"}</strong>
                  </div>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-task">
                  <span>{"ONE FOCUSED TASK"}</span>
                  <strong>{"Compare suitable slots"}</strong>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-result">
                  <span className="result-caption">
                    {"ILLUSTRATIVE RESULT"}
                  </span>
                  <div className="agent-result-row">
                    <span className="result-mark ok" aria-hidden="true">
                      {"\u2713"}
                    </span>
                    <div>
                      <strong>{"Explain"}</strong>
                      <span>{"Why a slot fits the scheduling rules"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark next" aria-hidden="true">
                      {"\u2192"}
                    </span>
                    <div>
                      <strong>{"Preview"}</strong>
                      <span>{"Which jobs a proposed move affects"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark missing" aria-hidden="true">
                      {"!"}
                    </span>
                    <div>
                      <strong>{"Approval required"}</strong>
                      <span>{"Apply only the agreed changes"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agent-story">
                <h4>{"A clearer diary. More informed changes."}</h4>
                <p>
                  {
                    "Suggests suitable slots using availability, job requirements and tenant preferences. Answers questions about scheduling rules, previews the likely effects of a proposed change and applies specifically approved changes through connected scheduling tools. "
                  }
                </p>
                <div className="agent-prompt">
                  <span>{"YOU COULD ASK"}</span>
                  <p>
                    {
                      "\u201cWhat happens if we move these jobs to tomorrow? Show the impact before changing the schedule.\u201d"
                    }
                  </p>
                </div>
                <div className="agent-delivers">
                  <span>{"YOUR TEAM RECEIVES"}</span>
                  <strong>{"A proposed schedule and impact summary"}</strong>
                </div>
              </div>
            </div>
          </article>
          <article
            className="agent-visual-panel"
            role="tabpanel"
            tabIndex="0"
            id="panel-evidence-gap"
            aria-labelledby="evidence-gap"
            hidden={active !== "evidence-gap"}
          >
            <div className="agent-panel-title">
              <div>
                <span>
                  {
                    "PLANNED AGENT / GAS \u00b7 ELECTRICAL \u00b7 AWAAB\u2019S LAW"
                  }
                </span>
                <h3>{"Evidence gap agent"}</h3>
              </div>
              <span className="illustration-label">
                {"Illustrative workflow"}
              </span>
            </div>
            <div className="agent-visual-layout">
              <div className="agent-diagram">
                <div className="agent-inputs">
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Completed activity"}</strong>
                  </div>
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Required documents"}</strong>
                  </div>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-task">
                  <span>{"ONE FOCUSED TASK"}</span>
                  <strong>{"Check the evidence trail"}</strong>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-result">
                  <span className="result-caption">
                    {"ILLUSTRATIVE RESULT"}
                  </span>
                  <div className="agent-result-row">
                    <span className="result-mark ok" aria-hidden="true">
                      {"\u2713"}
                    </span>
                    <div>
                      <strong>{"Recorded"}</strong>
                      <span>{"Visit marked complete"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark missing" aria-hidden="true">
                      {"!"}
                    </span>
                    <div>
                      <strong>{"Missing"}</strong>
                      <span>{"No linked supporting document"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark next" aria-hidden="true">
                      {"\u2192"}
                    </span>
                    <div>
                      <strong>{"Next step"}</strong>
                      <span>{"Request the missing evidence"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agent-story">
                <h4>{"Know exactly what evidence is missing."}</h4>
                <p>
                  {
                    "Checks connected records for required supporting documents and produces a focused list of gaps, with links to the affected properties or cases."
                  }
                </p>
                <div className="agent-prompt">
                  <span>{"YOU COULD ASK"}</span>
                  <p>
                    {
                      "\u201cWhich completed visits are missing their supporting evidence?\u201d"
                    }
                  </p>
                </div>
                <div className="agent-delivers">
                  <span>{"YOUR TEAM RECEIVES"}</span>
                  <strong>{"A focused list of gaps to follow up"}</strong>
                </div>
              </div>
            </div>
          </article>
          <article
            className="agent-visual-panel"
            role="tabpanel"
            tabIndex="0"
            id="panel-exception-explanation"
            aria-labelledby="exception-explanation"
            hidden={active !== "exception-explanation"}
          >
            <div className="agent-panel-title">
              <div>
                <span>
                  {
                    "PLANNED AGENT / GAS \u00b7 ELECTRICAL \u00b7 AWAAB\u2019S LAW"
                  }
                </span>
                <h3>{"Exception explanation agent"}</h3>
              </div>
              <span className="illustration-label">
                {"Illustrative workflow"}
              </span>
            </div>
            <div className="agent-visual-layout">
              <div className="agent-diagram">
                <div className="agent-inputs">
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Source records"}</strong>
                  </div>
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Compliance figures"}</strong>
                  </div>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-task">
                  <span>{"ONE FOCUSED TASK"}</span>
                  <strong>{"Compare and explain differences"}</strong>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-result">
                  <span className="result-caption">
                    {"ILLUSTRATIVE RESULT"}
                  </span>
                  <div className="agent-result-row">
                    <span className="result-mark ok" aria-hidden="true">
                      {"\u2713"}
                    </span>
                    <div>
                      <strong>{"Source A"}</strong>
                      <span>{"Job marked complete"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark missing" aria-hidden="true">
                      {"!"}
                    </span>
                    <div>
                      <strong>{"Source B"}</strong>
                      <span>{"Job still shown as open"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark next" aria-hidden="true">
                      {"\u2192"}
                    </span>
                    <div>
                      <strong>{"Explanation"}</strong>
                      <span>{"Status disagreement needs review"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agent-story">
                <h4>{"Understand the disagreement. Find the next step."}</h4>
                <p>
                  {
                    "Explains conflicting dates, statuses and records in plain language. Shows the sources behind each exception and what your team needs to investigate."
                  }
                </p>
                <div className="agent-prompt">
                  <span>{"YOU COULD ASK"}</span>
                  <p>
                    {
                      "\u201cWhy do these systems show different compliance figures?\u201d"
                    }
                  </p>
                </div>
                <div className="agent-delivers">
                  <span>{"YOUR TEAM RECEIVES"}</span>
                  <strong>
                    {"An explanation linked to its source records"}
                  </strong>
                </div>
              </div>
            </div>
          </article>
          <article
            className="agent-visual-panel"
            role="tabpanel"
            tabIndex="0"
            id="panel-data-insights"
            aria-labelledby="data-insights"
            hidden={active !== "data-insights"}
          >
            <div className="agent-panel-title">
              <div>
                <span>{"PLANNED AGENT / ALL FOUR PRODUCTS"}</span>
                <h3>{"Insights agent"}</h3>
              </div>
              <span className="illustration-label">
                {"Illustrative workflow"}
              </span>
            </div>
            <div className="agent-visual-layout">
              <div className="agent-diagram">
                <div className="agent-inputs">
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Your question"}</strong>
                  </div>
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Authorised data"}</strong>
                  </div>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-task">
                  <span>{"ONE FOCUSED TASK"}</span>
                  <strong>{"Query, explain and prepare export"}</strong>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-result">
                  <span className="result-caption">
                    {"ILLUSTRATIVE RESULT"}
                  </span>
                  <div className="agent-result-row">
                    <span className="result-mark ok" aria-hidden="true">
                      {"\u2713"}
                    </span>
                    <div>
                      <strong>{"Answer"}</strong>
                      <span>{"Results for your question"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark next" aria-hidden="true">
                      {"\u2192"}
                    </span>
                    <div>
                      <strong>{"Context"}</strong>
                      <span>{"Filters, definitions and source records"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark ok" aria-hidden="true">
                      {"\u2713"}
                    </span>
                    <div>
                      <strong>{"Output"}</strong>
                      <span>{"Supporting rows and summaries"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agent-story">
                <h4>{"Ask the question. Take the data with you."}</h4>
                <p>
                  {
                    "Answers questions that can be supported by your connected, authorised data. Explores patterns, explains results and prepares the supporting rows and summaries for export to Excel, including filters and source context."
                  }
                </p>
                <div className="agent-prompt">
                  <span>{"YOU COULD ASK"}</span>
                  <p>
                    {
                      "\u201cShow outstanding jobs by contractor and region, explain the differences and export the results to Excel.\u201d"
                    }
                  </p>
                </div>
                <div className="agent-delivers">
                  <span>{"YOUR TEAM RECEIVES"}</span>
                  <strong>{"A traceable answer and export-ready data"}</strong>
                </div>
              </div>
            </div>
          </article>
          <article
            className="agent-visual-panel"
            role="tabpanel"
            tabIndex="0"
            id="panel-job-assistant"
            aria-labelledby="job-assistant"
            hidden={active !== "job-assistant"}
          >
            <div className="agent-panel-title">
              <div>
                <span>{"PLANNED AGENT / DAMP & MOULD"}</span>
                <h3>{"Job assistant agent"}</h3>
              </div>
              <span className="illustration-label">
                {"Illustrative workflow"}
              </span>
            </div>
            <div className="agent-visual-layout">
              <div className="agent-diagram">
                <div className="agent-inputs">
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Job history"}</strong>
                  </div>
                  <div>
                    <span>{"INPUT"}</span>
                    <strong>{"Approved instructions"}</strong>
                  </div>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-task">
                  <span>{"ONE FOCUSED TASK"}</span>
                  <strong>{"Support the visit"}</strong>
                </div>
                <div className="agent-wire" aria-hidden="true">
                  {"\u2193"}
                </div>
                <div className="agent-result">
                  <div className="agent-result-row">
                    <span className="result-mark ok" aria-hidden="true">
                      {"\u2713"}
                    </span>
                    <div>
                      <strong>{"Prepare"}</strong>
                      <span>{"Review the job and previous visit notes"}</span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark next" aria-hidden="true">
                      {"\u2192"}
                    </span>
                    <div>
                      <strong>{"During the visit"}</strong>
                      <span>
                        {"Find approved instructions and capture evidence"}
                      </span>
                    </div>
                  </div>
                  <div className="agent-result-row">
                    <span className="result-mark missing" aria-hidden="true">
                      {"!"}
                    </span>
                    <div>
                      <strong>{"Before completion"}</strong>
                      <span>
                        {"Check missing records and flag issues for review"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agent-story">
                <h4>{"Job support, right where the work happens."}</h4>
                <p>
                  {
                    "Helps contractors and operatives understand the job, find approved work instructions and see what to record during a visit. Answers questions using the job history, prompts for missing photos and notes, and flags issues for the property team to review."
                  }
                </p>
                <div className="agent-prompt">
                  <span>{"YOU COULD ASK"}</span>
                  <p>
                    {
                      "\u201cWhat happened on the previous visit, which approved instructions apply, and what evidence do I need before completing this job?\u201d"
                    }
                  </p>
                </div>
                <div className="agent-delivers">
                  <span>{"YOUR TEAM RECEIVES"}</span>
                  <strong>
                    {"Job-specific guidance and a completion checklist"}
                  </strong>
                </div>
                <p>
                  {
                    "Operatives and contractors review the guidance. The agent uses approved procedures and escalates unresolved questions to the property team."
                  }
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="agent-controls">
        <strong>{"Your team stays in control."}</strong>
        <p>
          {
            "Answers point to supporting records and respect access permissions. Where data cannot support an answer, the agent says so. Scheduling changes require approval and a record of what changed; AI explanations do not independently determine compliance."
          }
        </p>
      </div>
    </section>
  );
}
