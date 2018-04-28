import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default class AddMemberForm extends Component{
  constructor(props){
    super(props);
      this.state = {
        nameUser: '',
        currentUsers:''
      }

      this.submitForm = this.submitForm.bind(this);
      this.getUserName = this.getUserName.bind(this);
      this.setUserName = this.setUserName.bind(this);
    }
    submitForm(event) {
      event.preventDefault();
      this.getUserName();
    }

    setUserName(event){
      this.setState({nameUser: event.target.value})
    }

    getUserName(){
      console.log(this.state.nameUser);
      axios.get('http://localhost:8080/user/'+this.state.nameUser)
      .then(response => this.setState({currentUsers: response.data}))
   }
    showUserName(){
        var html='';
        if(this.state.currentUsers.firstName != null){
           html = <div>{this.state.currentUsers.firstName} <button type="button" class="btn btn-success">Adicionar</button>
                    </div>
        }else{
            html =''
        }
        return html;
    }
  render (){
    var html =
              <div className="container">
                  <h1 className="page-title">Procure o Membro para adicionar a banda</h1>
                  <form id="form-container" onSubmit={this.submitForm} >
                      <div className="form-group">
                          <label>Nome:</label>
                          <input  value={this.state.nameUser}  onChange={this.setUserName}  type="text" className="form-control" name="band-name" required="required" placeholder="Sua banda"/>
                      </div>
                      <button type="submit" class="btn btn-info" value="Procura"  >Procura</button>
                  </form>
                  {this.showUserName()}
              </div>
    return html;
  }
}
