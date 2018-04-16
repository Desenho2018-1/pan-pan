import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../base/base.css';
import './UserLoginForm.css';
import HeaderPage from '../headerPage/HeaderPage';
import LabelPage from '../labelsPage/LabelPage';
import axios from "axios";


class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.loginUser = this.loginUser.bind(this);

  }

  loginUser(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const dataUser = {

          email: dataForm.get('email'),
          password: dataForm.get('password'),

    }

    axios.post('http://localhost:8080/login/login', dataUser)
      .then(function(response){
        console.log(response.data)
      })
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <body className="base-body">
        <HeaderPage userName="josue" />
        <div id="title-login">
          <label htmlFor="name" id="title-login-label" ><b><font face="Norwester" >Login</font></b></label>
        </div>
        <div className="form-group">
          <form id="user-login-form" onSubmit={this.loginUser}>
            <div id="label-format-camp">
              <LabelPage label="E-mail:" />
            </div>
            <div id="text-input">
              <input
                type="text"
                className="form-control col-lg-4"
                onChange={this.handleEmail}
                value={this.state.email}
                placeholder="Seu email"
                required="required"
                name="email"
              />
            </div>
            <div id="label-format-camp">
              <LabelPage label="Senha:" />
            </div>
            <div id="text-input">
              <input type="password" id="" className="form-control col-lg-4" onChange={this.handlePassword} value={this.state.password} placeholder="Insira uma senha" required="required" name="password" />
            </div>
              <button id="button-register" type="submit" className="btn btn-secondary btn-lg" value="register">Entrar</button>
          </form>
        </div>
      </body>
    );
  }
}
export default UserLoginForm;
