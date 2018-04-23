import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './PageHeader.css'

export default class PageHeader extends Component{
  constructor(props){
    super(props);
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
            <a className="navbar-brand" href="#">Pan-Pan</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
            </ul>
          </div>

        </div>
      </nav>
      )
    }
}
