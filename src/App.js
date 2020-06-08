import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Helper } from "./components/Helper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
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
        <Switch>
          <Route path="/helper">
            <Helper />
          </Route>
          <Route path="/helperhelpers">
            <div>Helper Helpers</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
