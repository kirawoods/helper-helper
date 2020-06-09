import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <nav>
        <div className="menu">
          <Link to="/" className="menu-item">
            Home
          </Link>

          <Link to="/helper" className="menu-item">
            Post a Request
          </Link>

          <Link to="/helperhelpers" className="menu-item">
            Help a Helper
          </Link>
        </div>
      </nav>
    </div>
  );
}
