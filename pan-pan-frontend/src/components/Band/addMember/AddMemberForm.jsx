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
      this.setMemberOnBand = this.setMemberOnBand.bind(this);
    }
    submitForm(event) {

      event.preventDefault();
      this.getUserName();

    }

    setUserName(event){

      this.setState({nameUser: event.target.value})

    }

    //frodo is only member register on system
    getUserName(){

      console.log(this.state.nameUser);
      axios.get('http://localhost:8080/api/users/search/findByFirstName?name='+this.state.nameUser)
      .then(response => this.setState({currentUsers: response.data}))
   }

   //Set 3 here because just have 1 band in system
   setMemberOnBand(){
     axios.get('http://localhost:8080/addMember/'+3+'/'+this.state.nameUser)
              .then(response => console.log(response.data));

   }
    showUserName(){
        var html='';
        if(this.state.currentUsers.firstName != null){
          return html = <div>{this.state.currentUsers.firstName} <button onClick={this.setMemberOnBand} type="button" class="btn btn-success">Adicionar</button>
                    </div>
        }else{
          return  html =''
        }

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
