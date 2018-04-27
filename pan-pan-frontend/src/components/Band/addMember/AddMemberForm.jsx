import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default class AddMemberForm extends Component{
  constructor(props){
    super(props);
      this.state = {users:[]}

      this.listUsers = this.listUsers.bind(this);
    }
    submitForm(event) {
    event.preventDefault();

    }
    listUsers(){
          axios.get('http://localhost:8080/user/all')
            .then(response => this.setState({users: response.data}))

          var users = this.state.users.map(function(user){
            return <div>
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.teamName}</td>
                      <td>{user.salary}</td>
                    </tr>
                  </div>
          });

          return users;
        }



  render (){
    return (
    <div className="container">
        <h1 className="page-title">Procure o Membro para adicionar a banda</h1>
        <form id="form-container">
            <div className="form-group">
                <label>Nome:</label>
                <input type="text" className="form-control" name="band-name" required="required" placeholder="Sua banda"/>
            </div>
            <input type="submit" value="Procura" />
        </form>
        {this.listUsers()}
      </div>
    )
  }
}
