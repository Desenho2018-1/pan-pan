import React, { Component } from "react";
import PropTypes from 'prop-types';


export default class PermissionRequired extends Component{
    render(){
        const loggedIn = this.props.loggedIn;

        if (loggedIn) {
            return(
            <div className="permission-granted">
                {this.props.children}
            </div>);
        }else {
            return(
            <div className="permission-denied">
                <h1> Aqui não neném! </h1>
            </div>);
        }

    }
}

PermissionRequired.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}
