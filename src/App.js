import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Helper } from "./components/Helper";
import { HelperHelper } from "./components/HelperHelper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/helper">
            <Helper />
          </Route>
          <Route path="/helperhelpers">
            <HelperHelper />
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
