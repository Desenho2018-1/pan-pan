import React, { Component } from "react";
import axios from "axios";
import '../base/base.css';
import './UserLoginForm.css'

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
                <div id="title-login">
                  <label id="title-login-label" ><b><font face="Norwester" >Login</font></b></label>
                </div>
                <div class="form-group">
                 <form id="user-login-form" onSubmit="">
                  <div id="label-format-camp">
                    <label  class="label-text-font" ><font face="Norwester" ><b>E-mail:</b></font></label>
                  </div>
                  <div id="input-text-format">
                    <input type="text" class= "form-control col-lg-4" placeholder="Seu email" required="required" name="email"></input>
                  </div>
                  <div id="label-format-camp">
                    <label class="label-text-font"><font face="Norwester"><b>Senha:</b></font></label>
                  </div>
                  <div id="input-text-format">
                    <input type="password" class= "form-control col-lg-4" placeholder="Insira uma senha" required="required" name="password"></input>
                  </div>
                      <button id="button-register" type="submit" class="btn btn-secondary btn-lg" value="register">Entrar</button>
                  </form>
                </div>
            </body>
        return html;
    }
}
export default UserLoginForm
