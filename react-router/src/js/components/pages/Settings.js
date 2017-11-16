import React from "react";

export default class Settings extends React.Component{
  render(){
    console.log(this.props);
    const {history,params,location} = this.props;
    const{query} = location;
      return(
        <div>
            <h1>
              Settings
            </h1>
            <h3>
                {params.setting}
                <br/>
                {query.name}
            </h3>
      </div>
    );
  }
}
