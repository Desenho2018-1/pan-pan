import React, { Component } from 'react';
import axios from 'axios'
import './UserRegisterForm.css'

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
    const data_form = new FormData(event.target);

    const data_user = {
          name: data_form.get('name'),
          email: data_form.get('email'),
          birthday: data_form.get('birthday'),
          password: data_form.get('password'),
          instrument: data_form.get('instrument'),
          city: data_form.get('city'),
          state: data_form.get('state'),
          username: data_form.get('username')
    }

    axios.post('', data_user)
      .then(response => console.log(response.data))

  }

  render(){
    var html =
          <body className="user-register-back">
                <head>
                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
                </head>
            <div className="UserRegisterForm">
                <header className="user-header">
                  <font id="pan-pan-header" face="Norwester"><b>Pan-Pan</b></font>
                </header>
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
