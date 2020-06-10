import React from "react";
import "./HelperHelper.css";
import { HelpRequestCard } from "./HelpRequestCard";

const helpRequest = {
  location: "San Francisco, CA",
  request: "Need help getting groceries",
  name: "Abby Friedman",
};

export function HelperHelper() {
  return (
    <div className="help-cards-container">
      <HelpRequestCard
        name={helpRequest.name}
        location={helpRequest.location}
        request={helpRequest.request}
      />
      <HelpRequestCard
        name={helpRequest.name}
        location={helpRequest.location}
        request={helpRequest.request}
      />
      <HelpRequestCard
        name={helpRequest.name}
        location={helpRequest.location}
        request={helpRequest.request}
      />
      <HelpRequestCard
        name={helpRequest.name}
        location={helpRequest.location}
        request={helpRequest.request}
      />
      <HelpRequestCard
        name={helpRequest.name}
        location={helpRequest.location}
        request={helpRequest.request}
      />
      <HelpRequestCard
        name={helpRequest.name}
        location={helpRequest.location}
        request={helpRequest.request}
      />
      <HelpRequestCard
        name={helpRequest.name}
        location={helpRequest.location}
        request={helpRequest.request}
      />
    </div>
  );
}
