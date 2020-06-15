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
      <div className="FAQ-section">
        <h2 className="FAQ-header">Frequently Asked Questions</h2>
        <p className="question">Does it cost anything to use Helper Helper?</p>
        <p className="answer">
          Helper Helper is totally free for both essential workers and those who
          respond to help requests.
        </p>
        <p className="question">Who qualifies as an essential worker?</p>
        <p className="answer">
          Many services are only offering assistance to healthcare workers
          during this crisis. We consider essential workers to be anyone who is
          doing an in-person job during the COVID-19 crisis.
        </p>
        <p className="question">How do I prove I'm an essential worker?</p>
        <p className="answer">
          On the request form, there's a file upload section. Please include a
          copy of your work ID badge, healthcare provider license, or other
          proof of current in-person work, such as an employment contract or a
          letter or email from your current employer.
        </p>
      </div>
    </div>
  );
}
