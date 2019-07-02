import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Todos from "./Todos";
import NotFound from "./NotFound";

const App = () => (
  <div data-testid="app" className="App">
    <div className="App-header">
      <h1>Hi Coder Academy!</h1>
      <Navigation />
    </div>
    <div className="App-content">
      <Router>
        <Home path="/" />
        <Todos path="/todos" />
        <NotFound default />
      </Router>
    </div>
  </div>
);

export default App;
