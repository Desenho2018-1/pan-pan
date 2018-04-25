import React, { Component } from 'react';
import axios from 'axios';

import User from '../models/User';


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        const loginForm = new FormData(event.target);

        var result = {
            username:loginForm.get('username'),
            password:loginForm.get('password')
        }

        console.log(result);

        axios.post('http://localhost:8080/api/users/login', result)
        .then(function (response) {
            sessionStorage.setItem('user', JSON.stringify(response.data));
            let user_storage = sessionStorage.getItem('user');

            console.log("storage dps", JSON.parse(user_storage));
        });
    }


    render() {
        return (
            <div className="container">
                <h1 className="page-header"> Login </h1>

                <form className="form-container" onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" name="username" id="username" placeholder="Seu username"/>
                    </div>

                    <div className="form-group">
                        <label>Senha:</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Sua senha"/>
                    </div>

                    <div className="form-group submit-btn" >
                        <button type="submit" className="btn btn-primary">Entrar</button>
                    </div>

                </form>
            </div>
        )    
    }
}
