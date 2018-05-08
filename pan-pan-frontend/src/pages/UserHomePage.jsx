import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader'
import UserHome from '../components/User/home/UserHome'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'


class UserHomePage extends Component {
    render() {
        const isAuthenticated = this.props.login.isAuthenticated

        return (
            <PermissionRequired loggedIn={isAuthenticated}>
                <PageHeader />
                <UserHome />
            </ PermissionRequired>
        )
    }
}

UserHomePage.propTypes = {
    login: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { })(UserHomePage);
