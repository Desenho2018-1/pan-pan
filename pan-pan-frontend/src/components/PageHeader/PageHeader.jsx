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

    defineHome(){
        const { isAuthenticated} = this.props.login;
        let home = "/"

        if (isAuthenticated) {
            return "/user/home";
        }else {
            return home;
        }
    }


    isAuthenticated(){
        const { isAuthenticated, user } = this.props.login;
        const logout = this.props.logout
        let navbar = <div></div>

        if (isAuthenticated) {
            navbar =    <div>
                            <p className="navbar-text">Oi, {user.firstName}!</p>
                            <p className="navbar-text btn-link" onClick={logout}>Logout</p>
                        </div>
        } else {
            navbar =    <div>
                            <p className="navbar-text btn-link">
                                <Link to="/user/login">Login</Link>
                            </p>
                        </div>
        }

        return(
            <li className="active">{navbar}</li>
        )
    }

    render(){
        const home = this.defineHome()
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
                          <Link to={home}>
                            <img src={require("../../assets/imgs/pan_pan_minimal_white.png")} alt="logo" />
                          </Link>
                          <a className="navbar-brand" href={home}> <font color="white">Pan-Pan</font></a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right">
                            {this.isAuthenticated()}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

PageHeader.propTypes = {
    login: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired

}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { logout })(PageHeader);
