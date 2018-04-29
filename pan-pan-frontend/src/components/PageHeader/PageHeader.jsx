import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './PageHeader.css'

import User from '../User/models/User'


export default class PageHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {};

        this.isLogged = this.isLogged.bind(this);
    }

    isLogged(){
        let sessionUser = sessionStorage.getItem('user');

        if (sessionUser) {
            let user = new User(JSON.parse(sessionUser))
            return 'Welcome ' + user.name + ' !';
        }else{
            return <Link to="/user/login">Login</Link>;
        }
    }

    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div class="head">
                          <Link to="/">
                            <img src={require("../../assets/imgs/pan_pan_minimal_white.png")} alt="logo" />
                          </Link>
                          <a className="navbar-brand" href="/"> <font color="white">Pan-Pan</font></a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav">
                            <li className="active">{this.isLogged()}</li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
