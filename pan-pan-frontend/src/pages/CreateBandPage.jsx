import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateBandForm from '../components/Band/create/CreateBandForm'
import PageHeader from '../components/PageHeader/PageHeader'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'

class CreateBandPage extends Component {
  render() {
      const isAuthenticated = this.props.login.isAuthenticated

      return (
          <PermissionRequired loggedIn={isAuthenticated}>
                <PageHeader />
                <CreateBandForm />
          </ PermissionRequired>
        )
    }
}

CreateBandPage.propTypes = {
    login: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { })(CreateBandPage);
