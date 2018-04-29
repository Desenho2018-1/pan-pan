import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader';
import LoginForm from '../components/User/login/LoginForm'
import { login } from '../actions/Utils/PermissionRequired.js'

class LoginPage extends Component{
    render(){
        const login = this.props.login;

        return (
            <div>
                <PageHeader />
                <LoginForm login={login}/>
            </div>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
}

export default connect(null, { login })(LoginPage);
