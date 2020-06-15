import React from "react";
import "./HelpRequestCard.css";
import { Link } from "react-router-dom";

export function HelpRequestCard(props) {
  return (
    <div className="help-request-card">
      <div>
        <h2>{props.location}</h2>
        <p>{props.request}</p>
        <p>{props.name}</p>
        <Link to="/message" className="fulfill-request-button">
          Fulfill Request
        </Link>
      </div>
    </div>
  );
}
