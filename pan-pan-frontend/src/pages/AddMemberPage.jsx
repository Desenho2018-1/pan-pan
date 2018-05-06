import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddMemberForm from '../components/Band/addMember/AddMemberForm'
import PageHeader from '../components/PageHeader/PageHeader'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'


class AddMemberPage extends Component {
  render() {
    const isAuthenticated = this.props.login.isAuthenticated

    return (
        <div>
            <PermissionRequired loggedIn={isAuthenticated}>
                <PageHeader />
                <AddMemberForm />
            </ PermissionRequired>
        </div>
    )
  }
}

AddMemberPage.propTypes = {
    login: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}


export default connect(mapStateToProps, { })(AddMemberPage);
