import React from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Helper } from "./components/Helper";
import { HelperHelper } from "./components/HelperHelper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Message } from "./components/MessageHelper";

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
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
