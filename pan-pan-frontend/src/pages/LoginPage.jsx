import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader';
import LoginForm from '../components/User/login/LoginForm'
import { login } from '../actions/User/LoginAction.js'
import { userLoginRequest } from '../actions/User/LoginAction.js'
import { deleteFlashLoading } from '../actions/Utils/FlashLoading.js';
import LoadingContainer from '../components/Utils/loading/LoadingContainer';

class LoginPage extends Component{
    render(){
        const {login, userLoginRequest, deleteFlashLoading} = this.props;

        return (
            <div>
                <LoadingContainer />
                <PageHeader />
                <LoginForm
                    login={login}
                    userLoginRequest={userLoginRequest}
                    deleteFlashLoading={deleteFlashLoading}/>
            </div>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    userLoginRequest: PropTypes.func.isRequired,
    deleteFlashLoading: PropTypes.func.isRequired,
}

export default connect(null, { login, userLoginRequest, deleteFlashLoading })(LoginPage);
