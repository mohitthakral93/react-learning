import React from "react";
import {IndexLink,Link} from "react-router";

export default class Nav extends React.Component{

  constructor(){
    super();
    this.state = {
      collapsed : true,
    };
  }

  toggleCollapse(){
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render(){
    const { location } = this.props;
    const {collapsed} = this.state;
    const featuredClass =  location.pathname === "/" ? "active":"notActive";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const historyClass = location.pathname.match(/^\/history/) ? "active":"notActiveHistory";
    const navClass = collapsed ? "collapse" : "";
    return(
      <nav class="navbar navbar-inverse navbar-fixed-top" role = "navigation">
        <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
          <div class = {"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class = {featuredClass} onClick={this.toggleCollapse.bind(this)}>
                <IndexLink to="/">Featured</IndexLink>
              </li>
              <li class = {settingsClass} onClick={this.toggleCollapse.bind(this)}>
                <Link to="settings">Settings</Link>
              </li>
              <li class = {historyClass} onClick={this.toggleCollapse.bind(this)}>
                <Link to="history">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
