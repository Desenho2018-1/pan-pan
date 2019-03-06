import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader';
import LoginForm from '../components/User/login/LoginForm'
import { login } from '../actions/User/LoginAction.js'
import { userLoginRequest } from '../actions/User/LoginAction.js'
import { deleteFlashLoading } from '../actions/Utils/FlashLoading.js';
import LoadingContainer from '../components/Utils/loading/LoadingContainer';
import FlashMessagesList from '../components/Utils/flash/FlashMessagesList';
import { addFlashMessage } from '../actions/Utils/FlashMessages';

class LoginPage extends Component{
    render(){
        const { login, userLoginRequest, deleteFlashLoading, addFlashMessage } = this.props;

        return (
            <div>
                <LoadingContainer />
                <PageHeader />
                <FlashMessagesList redirectTo="/user/login" />
                <LoginForm
                    login={login}
                    userLoginRequest={userLoginRequest}
                    deleteFlashLoading={deleteFlashLoading}
                    addFlashMessage={addFlashMessage}/>
            </div>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    userLoginRequest: PropTypes.func.isRequired,
    deleteFlashLoading: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
}

export default connect(null, { login, userLoginRequest, deleteFlashLoading, addFlashMessage })(LoginPage);
