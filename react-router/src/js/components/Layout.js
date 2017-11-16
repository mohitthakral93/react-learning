import React from "react";
import {Link} from "react-router";
import Nav from "./layout/nav";
import Footer from "./layout/footer";

export default class Layout extends React.Component {
  navigate(){
    console.log(this.props);
    this.props.history.replaceState(null,"/");
      }
  render() {
      const {loaction} = this.props;
      const containerStyle = {
        marginTop : "60px"
      };
      return (
      <div>
        <Nav location={location}/>
        <div class = "container" style = {containerStyle}>
          <div class = "row">
            <div class="col-lg-12">
                  {this.props.children}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
