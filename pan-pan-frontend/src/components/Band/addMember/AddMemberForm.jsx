import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default class AddMemberForm extends Component{
  constructor(props){
    super(props);
      this.state = {currentUsers:[]}

      this.listUsers = this.listUsers.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
    submitForm(event) {
      event.preventDefault();
      this.listUsers()
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
    var hetml =
    <div className="container">
        <h1 className="page-title">Procure o Membro para adicionar a banda</h1>
        <form id="form-container" onSubmit={this.submitForm}>
            <div className="form-group">
                <label>Nome:</label>
                <input type="text" className="form-control" name="band-name" required="required" placeholder="Sua banda"/>
            </div>
            <input type="submit" value="Procura" />
        </form>
        <table className="App-table" align="center">
        <thead>
             <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Team Name</th>
               <th>Salary</th>
             </tr>
      </thead>
      <tbody>
        {this.listUsers()}
      </tbody>
    </table>
      </div>
    return hetml;
  }
}
