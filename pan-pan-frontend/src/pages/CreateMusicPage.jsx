import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateMusicForm from '../components/Music/create/CreateMusicForm'
import PageHeader from '../components/PageHeader/PageHeader'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'

class CreateMusicPage extends Component {
  render() {
      const band = this.props.location.state.band;
      const isAuthenticated = this.props.login.isAuthenticated
      console.log(band);
      return (
          <PermissionRequired loggedIn={isAuthenticated}>
                <PageHeader />
                <CreateMusicForm band={band}/>
          </ PermissionRequired>
        )
    }
}

CreateMusicPage.propTypes = {
    login: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}


export default connect(mapStateToProps, { })(CreateMusicPage);
