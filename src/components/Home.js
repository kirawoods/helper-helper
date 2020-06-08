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
    </div>
  );
}
