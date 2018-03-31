import React, { Component } from 'react';
import axios from 'axios'
import './User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {new_user: [],
                  current_users: []};
    this.data = ''

    this.submitForm = this.submitForm.bind(this);
    this.listUsers = this.listUsers.bind(this);


  }

  submitForm(event) {
    event.preventDefault();
    const data_form = new FormData(event.target);

    const data_user = {
          name: data_form.get('name'),
          teamName: data_form.get('teamName'),
          salary: data_form.get('salary')
    }

    axios.post('http://localhost:8080/users/add', data_user)
      .then(response => console.log(response.data))

  }

  listUsers(){
    axios.get('http://localhost:8080/users/all')
      .then(response => this.setState({current_users: response.data}))

    var users = this.state.current_users.map(function(user){
        return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.teamName}</td>
                <td>{user.salary}</td>
              </tr>
    });

    return users;
  }

  render() {
    var html =
        <div className="User">
          <form className="User-form" onSubmit={this.submitForm}>
            <label>Name:</label>
            <input id="name" type="text" name="name"/><br/>
            <label>Team:</label>
            <input id="teamName" type="text" name="teamName"/><br/>
            <label>Salary:</label>
            <input id="salary" type="text" name="salary"/><br/>

            <input type="submit" value="Register" />
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
    return html;
  }
}

export default User
