import React, { Component } from "react";
import './HeaderPage.css'
class HeaderPage extends Component{
  constructor(props){
    super(props);
      this.state = {
          userName:  props.userName
      };
    }
    render(){

      return (
          <header className="base-header">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <div id="pan-pan-div">
            <font id="pan-pan-header" face="Norwester"><b>Pan-Pan</b></font>
            </div>
            <div id="user-name-div">
            <div id="user-name-label"><font id="pan-pan-header" face="Norwester"><b>Oi,   </b><b>{this.state.userName}!</b></font></div>
            </div>
          </header>
        )
    }
}

export default HeaderPage
