import React, { Component } from "react";
import axios from "axios";
import '../base/base.css';


class UserLoginForm extends Component{
  constructor(props){
    super(props);
      this.state = {
          name: '',
          password: ''
      };
    }
    render(){
        var html =
            <body className="base-body">
                <header className="base-header">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
                </header>
                <div class="form-group"
                </div>
            </body>
        return html;
    }
}
export default UserLoginForm
