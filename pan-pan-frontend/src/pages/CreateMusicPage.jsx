import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateMusicForm from '../components/Music/create/CreateMusicForm'
import PageHeader from '../components/PageHeader/PageHeader'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'

class CreateMusicPage extends Component {
  render() {
      const isLoggedIn = this.props.permission.isLoggedIn
      console.log(isLoggedIn);

      return (
          <PermissionRequired loggedIn={isLoggedIn}>
                <PageHeader />
                <CreateMusicForm />
          </ PermissionRequired>
        )
    }
}

CreateMusicPage.propTypes = {
    permission: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        permission: state.permissionRequired
    }
}


export default connect(mapStateToProps, { })(CreateMusicPage);
