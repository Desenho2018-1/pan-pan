import React from 'react';
import { connect } from 'react-redux';

import { userSignupRequest } from '../actions/User/SignupAction';
import FlashMessagesList from '../components/Utils/flash/FlashMessagesList';
import LoadingContainer from '../components/Utils/loading/LoadingContainer';
import { addFlashMessage } from '../actions/Utils/FlashMessages';
import { deleteFlashLoading } from '../actions/Utils/FlashLoading';
import PageHeader from '../components/PageHeader/PageHeader';
import SignupForm from '../components/User/signup/SignupForm';

const SignupPage = () => (
  <div>
    <LoadingContainer />
    <PageHeader />
    <FlashMessagesList />
    <SignupForm
      userSignupRequest={userSignupRequest}
      addFlashMessage={addFlashMessage}
      deleteFlashLoading={deleteFlashLoading}
    />
  </div>
);

export default connect(
  null,
  { userSignupRequest, addFlashMessage, deleteFlashLoading },
)(SignupPage);
