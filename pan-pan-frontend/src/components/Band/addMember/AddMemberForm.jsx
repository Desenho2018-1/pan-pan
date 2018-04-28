import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default class AddMemberForm extends Component{
  constructor(props){
    super(props);
      this.state = {
        nameUser: '',
        currentUsers:[]
      }

      this.submitForm = this.submitForm.bind(this);
      this.getUserName = this.getUserName.bind(this);
      this.listUsers = this.listUsers.bind(this);
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
      .then(response=>console.log(response.data));

    }

    listUsers(){
        axios.get('http://localhost:8080/user/all')
          .then(response => this.setState({currentUsers: response.data}))

        var users = this.state.currentUsers.map(function(user){


        return(
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
              </tr>
            )
    });
    return users;

  }

  render (){
    var html =
              <div className="container">
                  <h1 className="page-title">Procure o Membro para adicionar a banda</h1>
                  <form id="form-container" onSubmit={this.submitForm}>
                      <div className="form-group">
                          <label>Nome:</label>
                          <input  value={this.state.nameUser}  onChange={this.setUserName}  type="text" className="form-control" name="band-name" required="required" placeholder="Sua banda"/>
                      </div>
                      <input type="submit" value="Procura" />
                  </form>
              </div>
    return html;
  }
}
