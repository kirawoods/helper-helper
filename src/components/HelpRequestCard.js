import React from "react";
import "./HelpRequestCard.css";
import { Link } from "react-router-dom";

export function HelpRequestCard(props) {
  return (
    <div className="help-request-card">
      <div>
        <div className="request-container">
          <h2 className="location">{props.location}</h2>

          <p className="request">
            <div className="card-label">Request </div> {props.request}
          </p>
          <p className="name">- {props.name}</p>
        </div>
        <div className="fulfill-request-button">
          <Link to="/message" className="button-text">
            Fulfill Request
          </Link>
        </div>
      </div>
    </div>
  );
}
