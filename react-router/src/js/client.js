import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import Layout from "./components/Layout";
import Settings from "./components/pages/Settings";
import History1 from "./components/pages/history";
import Featured from "./components/pages/featured";
import Todos from "./components/pages/Todos";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history = {hashHistory}>
      <Route path="/" component = {Layout}>
        <IndexRoute component = {Todos}></IndexRoute>
        <Route path="settings(/:setting)" component = {Settings}></Route>
        <Route path="history"  component = {History1}></Route>
      </Route>
  </Router>,
  app);
