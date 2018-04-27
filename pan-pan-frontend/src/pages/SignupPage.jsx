import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userSignupRequest} from '../actions/User/SignupAction';
import FlashMessagesList from '../components/Utils/flash/FlashMessagesList';
import LoadingContainer from '../components/Utils/loading/LoadingContainer';
import { addFlashMessage } from '../actions/Utils/FlashMessages.js';
import { deleteFlashLoading } from '../actions/Utils/FlashLoading.js';
import PageHeader from '../components/PageHeader/PageHeader';
import SignupForm from '../components/User/signup/SignupForm'

class SignupPage extends Component{

    render(){
        const { userSignupRequest, addFlashMessage, deleteFlashLoading } = this.props;

        return (
            <div>
                <LoadingContainer />
                <PageHeader />
                <FlashMessagesList />
                <SignupForm
                    userSignupRequest={userSignupRequest}
                    addFlashMessage={addFlashMessage}
                    deleteFlashLoading={deleteFlashLoading}/>
            </div>
        )
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    deleteFlashLoading: PropTypes.func.isRequired,
}

export default connect(null, { userSignupRequest, addFlashMessage, deleteFlashLoading })(SignupPage);
