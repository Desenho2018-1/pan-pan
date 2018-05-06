import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/User/LoginAction.js'
import './PageHeader.css'


class PageHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {};

    }

    isAuthenticated(){
        const { isAuthenticated, user } = this.props.permission;
        const logout = this.props.logout

        if (isAuthenticated) {
            return (<div>

                        <p className="navbar-text">Oi, {user.firstName}!</p>
                        <button className="navbar-text btn-link" onClick={logout}>Logout</button>
                    </div>
            );
        } else {
            return (
                    <div>
                        <button className="navbar-text btn-link">
                            <Link to="/user/login">Login</Link>
                        </button>
                    </div>
            );
        }
    }

    render(){
        return (
            <nav className="navbar navbar-inverse header-container">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="head">
                          <Link to="/">
                            <img src={require("../../assets/imgs/pan_pan_minimal_white.png")} alt="logo" />
                          </Link>
                          <a className="navbar-brand" href="/"> <font color="white">Pan-Pan</font></a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                            {this.isAuthenticated()}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

PageHeader.propTypes = {
    permission: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired

}

function mapStateToProps(state) {
    return {
        permission: state.login
    }
}

export default connect(mapStateToProps, { logout })(PageHeader);
