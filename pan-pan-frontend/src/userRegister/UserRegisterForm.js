import React, { Component } from 'react';

import './UserRegisterForm.css'

class UserRegisterForm extends Component{
  constructor(){
    super();
  }
  render(){
    var html =
          <body className="user-register-back">
                <head>
                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
                </head>
            <div className="UserRegisterForm">
                <header className="user-header">
                  Pan-Pan
                </header>
                    <div class="form-group">
                    <form id="registerForm">

                      <div id="label-format">
                        <label class="label-text-font"><font face="Norwester"><b>Nome:</b></font></label>
                      </div>
                      <div id="input-text-format" >
                          <input type="text" class= "form-control col-lg-4" placeholder="Seu nome" name="name"></input>
                        </div>
                      <div id="label-format-camp">
                        <label  class="label-text-font" ><font face="Norwester"><b>E-mail:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Seu email" name="email"></input>
                      </div>
                      <div id="label-format-camp-instrument">
                        <label class="label-text-font"><font face="Norwester"><b>Instrumento:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Qual seu Instrumento?"name="instrument"></input>
                      </div>
                      <div id="label-format-camp">
                        <label class="label-text-font"><font face="Norwester"><b>Senha:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Insira uma senha" name="password"></input>
                      </div>
                      <div id="label-format-repite-password">
                        <label class="label-text-font" ><font face="Norwester"><b>Repita a senha:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4"placeholder="Repita sua Senha" name="repitePassword"></input>
                      </div>
                      <button id="button-register" type="submit" class="btn btn-secondary btn-lg">Cadastrar</button>
                 </form>
               </div>
               </div>
          </body>
    return html;
  }
}

export default UserRegisterForm
