import React from "react";
import "./Header.css";
import logo from "../images/logo.png";

export function Header() {
  return (
    <div>
      <img className="header-logo" src={logo} />
    </div>
  );
}
