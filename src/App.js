import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes.js";
import { createBrowserHistory } from "history";
import "./assets/styles/app.scss";

const App = () => (
  <Router history={createBrowserHistory()}>
    <Routes />
  </Router>
);

export default App;
