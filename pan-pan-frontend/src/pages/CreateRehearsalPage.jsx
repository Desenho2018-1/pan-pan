import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader'
import CreateRehearsalForm from '../components/Rehearsal/CreateRehearsalForm'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'


class CreateRehearsalPage extends Component {
    render() {
        const isAuthenticated = this.props.login.isAuthenticated

        return (
            <PermissionRequired loggedIn={isAuthenticated}>
                <PageHeader />
                <CreateRehearsalForm />
            </ PermissionRequired>
        )
    }
}

CreateRehearsalPage.propTypes = {
    login: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}


export default connect(mapStateToProps, { })(CreateRehearsalPage);
