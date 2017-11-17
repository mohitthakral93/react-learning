import React from "react";
import Article from "./article"

export default class History1 extends React.Component{
  render(){
    const Articles = [
      "Medival-India",
      "India",
      "Punjab-History",
      "Mughal History",
      "British Invading India",
      "Sikinder History",
    ].map((title,i) => <Article key={i} title={title}/>);
    return(
      <div>
      <h1>History1</h1>
      <div class="row">{Articles}</div>
      </div>
    );
  }
}
