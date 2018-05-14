import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateBandForm from '../components/Band/create/CreateBandForm'
import PageHeader from '../components/PageHeader/PageHeader'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'
import FlashMessagesList from '../components/Utils/flash/FlashMessagesList';
import { addFlashMessage } from '../actions/Utils/FlashMessages.js';
import { setUserSession } from '../actions/User/LoginAction.js';

class CreateBandPage extends Component {
  render() {
      const isAuthenticated = this.props.login.isAuthenticated;
      const addFlashMessage = this.props.addFlashMessage;
      const setUserSession = this.props.setUserSession;

      return (
          <PermissionRequired loggedIn={isAuthenticated}>
                <PageHeader />
                <FlashMessagesList redirectTo="/user/home"/>
                <CreateBandForm addFlashMessage={ addFlashMessage }
                                setUserSession={ setUserSession }/>
          </ PermissionRequired>
        )
    }
}

CreateBandPage.propTypes = {
    login: PropTypes.object.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    setUserSession: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { addFlashMessage, setUserSession })(CreateBandPage);
