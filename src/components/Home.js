import React from "react";
import "./Home.css";
import logo from "../images/logo.png";

export function Home() {
  return (
    <div>
      <img className="header-logo" src={logo} />
      <div className="about-section">
        <h2 className="about-header">About</h2>
        <p>
          We're commited to finding ways to make a difference during these
          difficult times. Essential workers are more overworked than ever, and
          it's easy to feel lost and powerless as a non-essential worker during
          these times. HelperHelper is a community that pairs essential workers
          (Helpers) with volunteers (Helper Helpers) to reduce the burden on
          essential workers and empower volunteers to make a difference.{" "}
        </p>
      </div>
      <div className="how-it-works-section">
        <h2 className="how-it-works-header">How It Works</h2>
        <p>For Essential Workers</p>
        <p>
          Essential workers can post a request through the "Post a Request
          Page". Their request will then show up on the "Helper Helper" page so
          that volunteers can select a request to fulfill. You can make requests
          for assistance with tasks that happen in person, such as grocery
          delivery, or for tasks that can be done remotely, such as tax
          preparation. Please remember to keep your requests in accordance with
          local shelter in place ordinances.
        </p>
        <p>For Volunteers</p>
        <p>
          Volunteers can go to the "Help a Helper" page to view requests in
          their area or look for remote opportunities. Click the "Fulfill
          Request" button to respond to a helper request and get in contact with
          the essential worker who made the request.
        </p>
      </div>
    </div>
  );
}
