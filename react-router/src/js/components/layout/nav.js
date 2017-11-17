import React from "react";
import {IndexLink,Link} from "react-router";

export default class Nav extends React.Component{

  constructor(){
    super();
  render(){
    const {location} = this.props;
    const featuredClass =  location.pathname === "/" ? "active":"";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active":"";
    const historyClass = location.pathname.match(/^\/history/) ? "active":"";
    return(
      <nav class="navbar navbar-inverse navbar-fixed-top" role = "navigation">
        <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
          <div id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class = {featuredClass}>
                <IndexLink to="/">Featured</IndexLink>
              </li>
              <li class = {settingsClass}>
                <Link to="settings">Settings</Link>
              </li>
              <li class = {historyClass}>
                <Link to="history">History</Link>''
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
