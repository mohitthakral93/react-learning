import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
  navigate(){
    console.log(this.props);
    this.props.history.replaceState(null,"/");
      }
  render() {
    console.log( this.props.children);
    return (
      <div>
        <h1>Navigator App</h1>
        <div>{this.props.children}</div>
        <Link to = "settings">Settings</Link>
        <Link to = "history">History1</Link>
        <button onClick = {this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}
