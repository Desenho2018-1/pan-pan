import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./UserRegisterForm.css";
import "../base/base.css"
import HeaderPage from '../headerPage/HeaderPage.js'
import LabelPage from '../labelsPage/LabelPage.js'


class UserRegisterForm extends Component{
  constructor(props){
    super(props);
      this.stringToVector = this.stringToVector.bind(this);
      this.parseDate = this.parseDate.bind(this);
      this.submitForm = this.submitForm.bind(this);

      this.state = {
          firstName: "",
          lastName:"",
          birthdate:"",
          city:"",
          state:"",
          instrument:[],
          email:"",
          username:"",
          password:"",
          role:"",
          active:""
      }


  }

  stringToVector(data){
    var response = [];
    data = data.split(",");

    for (var i = 0; i < data.length; i++) {
      data[i].replace(",","")
      response.push(data[i])
    }
    return response;
  }


  parseDate(date_string){
    var response = []
    date_string = date_string.split("/")

    for (var i = 0; i < date_string.length; i++) {
      date_string[i].replace(",","")
      response.push(date_string[i])
    }
    const year = date_string[2]
    const month = date_string[1]
    const day = date_string[0]

    var date = new Date(year, month, day);

    return date;
  }


  submitForm(event){
    event.preventDefault();
    const dataForm = new FormData(event.target);

    //Break instruments into vector
    const instruments = this.stringToVector(dataForm.get('instrument'))
    const birthdate = this.parseDate(dataForm.get('birthday'))

    //Break full name to first and last name
    var name = dataForm.get('name')
    name = name.split(" ")
    const firstName = name[0]
    const lastName = name.pop()

    const dataUser = {
          firstName: firstName,
          lastName: lastName,
          email: dataForm.get('email'),
          birthdate: birthdate,
          password: dataForm.get('password'),
          instruments: instruments,
          city: dataForm.get('city'),
          state: dataForm.get('state'),
          username: dataForm.get('username'),
    }

    axios.post('http://localhost:8080/user/signup', dataUser)
      .then(response => {
        if (!alert("Cadastro realizado com sucesso")) {
          window.location.reload();
        }
      }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });

  }

  render(){
    var html =
      <div className="user-register-back">
        <div className="UserRegisterForm">
          <HeaderPage userName=''/>


          <div className="form-group" align="center">
            <form id="registerForm" onSubmit={this.submitForm}>
              <label id="label-register-title"><b>Cadastro</b></label>
                <div id="label-format">
                  <LabelPage  label='Name:' />
                </div>
                <div id="input-text-format">
                    <input type="text" className="form-control col-lg-4" required="required "placeholder="Seu nome" name="name"  ></input>
                </div>

                <div id="label-format-camp">
                  <LabelPage  label='Email:' />
                </div>
                <div id="input-text-format">
                  <input type="text" className= "form-control col-lg-4" placeholder="Seu email" required="required" name="email"></input>
                </div>

                <div id="label-format-age">
                  <LabelPage  label='Data de Nascimento' />
                </div>
                <div id="input-text-format">
                  <input type="text" className= "form-control col-lg-4" placeholder="**/**/****" required="required" name="birthday"></input>
                </div>

                <div id="label-format-camp-instrument">
                  <LabelPage  label='Instrumentos:' />
                </div>
                <div id="input-text-format">
                  <input type="text" className= "form-control col-lg-4" placeholder="Qual seu Instrumento?" required="required" name="instrument" ></input>
                </div>

                <div id="label-format-state-instrument">
                  <LabelPage  label='Estado:' />
                </div>
                <div id="input-text-format">
                  <input type="text" className= "form-control col-lg-4" placeholder="Qual sua estado?" required="required" name="state"></input>
                </div>

                <div id="label-format-camp-city">
                  <LabelPage  label='Cidade' />
                </div>
                <div id="input-text-format">
                  <input type="text" className= "form-control col-lg-4" placeholder="Qual seu cidade?" required="required" name="city"></input>
                </div>

                <div id="label-format-camp-username">
                    <LabelPage  label='UserName:' />
                </div>
                <div id="input-text-format">
                  <input type="text" className= "form-control col-lg-4" placeholder="Insira um apelido" required="required" name="username"></input>
                </div>

                <div id="label-format-camp">
                  <LabelPage  label='Senha:' />
                </div>
                <div id="input-text-format">
                  <input type="password" className= "form-control col-lg-4" placeholder="Insira uma senha" required="required" name="password"></input>
                </div>

                <div id="label-format-repite-password">
                    <LabelPage  label='Repita a senha:' />
                </div>
                <div id="input-text-format">
                  <input type="password" className= "form-control col-lg-4"placeholder="Repita sua Senha" name="repitePassword" required="required"  ></input>
                </div>
                <Link to="/user/login">
                  <button id="button-register" type="submit" className="btn btn-secondary btn-lg" value="register">Cadastrar</button>
                </Link>
             </form>
           </div>
        </div>
      </div>
    return html;
  }
}

export default UserRegisterForm
