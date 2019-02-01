import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import Home from "./components/Home.js";
import FormContainer from "./components/form/FormContainer.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import SampleReview from "./components/review/SampleReview.js";
import MainResults from "./components/results/MainResults.js";
import CustomizeContainer from "./components/customize/CustomizeContainer.js";

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/generate" component={FormContainer} />
      <Route path="/generate/review" component={SampleReview} />
      <Route path="/generate/customize" component={CustomizeContainer} />
      <Route path="/results" component={MainResults} />
    </Switch>
  </BrowserRouter>
);
