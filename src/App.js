import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/helper">Post a Request</Link>
            </li>
            <li>
              <Link to="/helperhelpers">Help a Helper</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/helper">
            <div>Helpers</div>
          </Route>
          <Route path="/helperhelpers">
            <div>Helper Helpers</div>
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
