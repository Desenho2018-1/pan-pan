import React, { Component } from "react";

import PageHeader from '../components/PageHeader/PageHeader';
import LoginForm from '../components/User/login/LoginForm'


export default class LoginPage extends Component{
    render(){
        return (
            <div>
                <PageHeader />
                <LoginForm />
            </div>
        )
    }
}
