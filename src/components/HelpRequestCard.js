import React from "react";
import "./HelpRequestCard.css";

export function HelpRequestCard(props) {
  return (
    <div className="help-request-card">
      <div>
        <h2>{props.location}</h2>
        <p>{props.request}</p>
        <p>{props.name}</p>
        <button className="fulfill-request-button">Fulfill Request</button>
      </div>
    </div>
  );
}
