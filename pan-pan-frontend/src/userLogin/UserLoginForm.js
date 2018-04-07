import React, { Component } from "react";
import axios from "axios";
import '../base/base.css';
import './UserLoginForm.css'
import HeaderPage from '../headerPage/HeaderPage.js'


class UserLoginForm extends Component{
  constructor(props){
    super(props);
      this.state = {
          email: '',
          password: ''
      };
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.loginUser = this.loginUser.bind(this);
    }

    loginUser(event){
      event.preventDefault();
      console.log(this.state.email);
      console.log(this.state.password);
    }

    handleEmail(event){
       this.setState({email: event.target.value});
    }
    handlePassword(event){
       this.setState({password: event.target.value});
    }
    render(){
        var html =
            <body className="base-body">
                <HeaderPage userName='josue'/>
                <div id="title-login">
                  <label id="title-login-label" ><b><font face="Norwester" >Login</font></b></label>
                </div>
                <div class="form-group">
                 <form id="user-login-form" onSubmit={this.loginUser}>
                  <div id="label-format-camp">
                    <label  class="label-text-font" ><font face="Norwester" ><b>E-mail:</b></font></label>
                  </div>
                  <div id="input-text-format">
                    <input type="text" class= "form-control col-lg-4" onChange={this.handleEmail} value={this.state.email} placeholder="Seu email" required="required" name="email"></input>
                  </div>
                  <div id="label-format-camp">
                    <label class="label-text-font"><font face="Norwester"><b>Senha:</b></font></label>
                  </div>
                  <div id="input-text-format">
                    <input type="password" class= "form-control col-lg-4" onChange={this.handlePassword} value={this.state.password} placeholder="Insira uma senha" required="required" name="password"></input>
                  </div>
                      <button id="button-register" type="submit" class="btn btn-secondary btn-lg" value="register">Entrar</button>
                  </form>
                </div>
            </body>
        return html;
    }
}
export default UserLoginForm
