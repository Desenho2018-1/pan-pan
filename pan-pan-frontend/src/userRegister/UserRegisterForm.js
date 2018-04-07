import React, { Component } from "react";
import axios from "axios";
import "./UserRegisterForm.css";
import "../base/base.css"
import HeaderPage from '../headerPage/HeaderPage.js'


class UserRegisterForm extends Component{
  constructor(props){
    super(props);
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

  submitForm(event){
    event.preventDefault();
    const dataForm = new FormData(event.target);

    const dataUser = {
          name: dataForm.get('name'),
          email: dataForm.get('email'),
          birthday: dataForm.get('birthday'),
          password: dataForm.get('password'),
          instrument: dataForm.get('instrument'),
          city: dataForm.get('city'),
          state: dataForm.get('state'),
          username: dataForm.get('username')
    }

    axios.post('', dataUser)
      .then(response => console.log(response.data))

  }

  render(){
    var html =
          <body className="base-body">
            <div className="UserRegisterForm">
              <HeaderPage userName='josue'/>
                <div class="form-group">
                    <form id="registerForm" onSubmit={this.submitForm}>
                      <label id="label-register-title"><font face= "Norwester"><b>Cadastro</b> </font></label>
                      <div id="label-format">
                        <label class="label-text-font"><font face="Norwester"><b>Nome:</b></font></label>
                      </div>
                      <div id="input-text-format">
                          <input type="text" class="form-control col-lg-4" required="required "placeholder="Seu nome" name="name"  ></input>
                        </div>
                      <div id="label-format-camp">
                        <label  class="label-text-font" ><font face="Norwester" ><b>E-mail:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Seu email" required="required" name="email"></input>
                      </div>
                      <div id="label-format-age">
                        <label  class="label-text-font" ><font face="Norwester" ><b>Data de Nascimento</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="**/**/****" required="required" name="birthday"></input>
                      </div>
                      <div id="label-format-camp-instrument">
                        <label class="label-text-font"><font face="Norwester"><b>Instrumetos:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Qual seu Instrumento?" required="required" name="instrument" ></input>
                      </div>
                      <div id="label-format-state-instrument">
                        <label class="label-text-font"><font face="Norwester"><b>Estado:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Qual sua estado?" required="required" name="state"></input>
                      </div>
                      <div id="label-format-camp-city">
                        <label class="label-text-font"><font face="Norwester"><b>Cidade:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Qual seu cidade?" required="required" name="city"></input>
                      </div>
                      <div id="label-format-camp-username">
                        <label class="label-text-font"><font face="Norwester"><b>UserName:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Insira um apelido" required="required" name="username"></input>
                      </div>
                      <div id="label-format-camp">
                        <label class="label-text-font"><font face="Norwester"><b>Senha:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="password" class= "form-control col-lg-4" placeholder="Insira uma senha" required="required" name="password"></input>
                      </div>

                      <div id="label-format-repite-password">
                        <label class="label-text-font" ><font face="Norwester"><b>Repita a senha:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="password" class= "form-control col-lg-4"placeholder="Repita sua Senha" name="repitePassword" required="required"  ></input>
                      </div>
                      <button id="button-register" type="submit" class="btn btn-secondary btn-lg" value="register">Cadastrar</button>
                 </form>
               </div>
               </div>
          </body>
    return html;
  }
}

export default UserRegisterForm
