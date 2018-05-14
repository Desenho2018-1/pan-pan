import React, { Component } from "react";
import PropTypes from 'prop-types';
import PermissionError from '../errors/403_ERROR'

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
                <PermissionError/>
            </div>);
        }

    }
}

PermissionRequired.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}
