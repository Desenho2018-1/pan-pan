import React, { Component } from "react";
import './HeaderPage.css'
class HeaderPage extends Component{
  constructor(props){
    super(props);
      this.state = {
          userName: ''
      };
    }
    render(){
      return (
          <header className="base-header">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <font id="pan-pan-header" face="Norwester"><b>Pan-Pan</b></font>
            <div id="user-name">
            <label>{this.state.userName}</label>
            </div>
          </header>
          )
    }
}

export default HeaderPage
