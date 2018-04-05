import React, { Component } from 'react';

import './UserRegisterForm.css'

class UserRegisterForm extends Component{
  constructor(props){
    super(props);
      this.state = {
          name: '',
          email:'',
          password:'',
          instrument:'',
          city:'',
          state:''
      }
  }

  handleNameChange(event){
        this.setState({name: event.target.value});
  }
  handleCityChange(event){
    this.setState({city: event.target.value});
  }
  handleStateChange(event){
    this.setState({State: event.target.value});
  }
  handleEmailChange(event){
    this.setState({email: event.target.value});
  }
  handleInstrumentChange(event){
    this.setState({instrument: event.target.value});
  }
  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  listState(){
    
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
                    <form id="registerForm" onSubmit={this.userInput}>

                      <div id="label-format">
                        <label class="label-text-font"><font face="Norwester"><b>Nome:</b></font></label>
                      </div>
                      <div id="input-text-format">
                          <input type="text" class="form-control col-lg-4" required="required "placeholder="Seu nome" name="name" value={this.state.name}  onChange={(event) => this.handleNameChange(event)}></input>
                        </div>
                      <div id="label-format-camp">
                        <label  class="label-text-font" ><font face="Norwester" ><b>E-mail:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Seu email" required="required" name="email" onChange={(event) => this.handleEmailChange(event)}></input>
                      </div>
                      <div id="label-format-age">
                        <label  class="label-text-font" ><font face="Norwester" ><b>Data de Nascimento</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="**/**/****" required="required" name="age" onChange={(event) => this.handleEmailChange(event)}></input>
                      </div>
                      <div id="label-format-camp-instrument">
                        <label class="label-text-font"><font face="Norwester"><b>Instrumetos:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Qual seu Instrumento?" required="required" name="instrument" onChange={(event) => this.handleInstrumentChange(event)}></input>
                      </div>
                      <div id="label-format-state-instrument">
                        <label class="label-text-font"><font face="Norwester"><b>Estado:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Qual sua estado?" required="required" name="state" onChange={(event) => this.handleStateChange(event)}></input>
                      </div>
                      <div id="label-format-camp-city">
                        <label class="label-text-font"><font face="Norwester"><b>Cidade:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="text" class= "form-control col-lg-4" placeholder="Qual seu cidade?" required="required" name="city" onChange={(event) => this.handleCityChange(event)}></input>
                      </div>
                      <div id="label-format-camp-username">
                        <label class="label-text-font"><font face="Norwester"><b>UserName:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="password" class= "form-control col-lg-4" placeholder="Insira um apelido" required="required" name="username" onChange={(event) => this.handlePasswordChange(event)}></input>
                      </div>
                      <div id="label-format-camp">
                        <label class="label-text-font"><font face="Norwester"><b>Senha:</b></font></label>
                      </div>
                      <div id="input-text-format">
                        <input type="password" class= "form-control col-lg-4" placeholder="Insira uma senha" required="required" name="password" onChange={(event) => this.handlePasswordChange(event)}></input>
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
