import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader'
import BandHome from '../components/Band/home/BandHome'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'


class BandHomePage extends Component {

    render() {
        const band = this.props.location.state.band;
        const isAuthenticated = this.props.login.isAuthenticated;
        return (
            <PermissionRequired loggedIn={isAuthenticated}>
                <PageHeader />
                <BandHome band={band}/>
            </ PermissionRequired>
        )
    }
}

BandHomePage.propTypes = {
    login: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { })(BandHomePage);
