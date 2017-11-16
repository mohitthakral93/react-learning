import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {

handleChangeTitle(e){
  var titleVal = e.target.value;
  this.props.changeTitle(titleVal);
}

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange = {this.handleChangeTitle.bind(this)}/>
      </div>
    );
  }
}
