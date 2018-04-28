import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../assets/static/homepage.css'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'
import PageHeader from '../components/PageHeader/PageHeader'

export default class HomePage extends Component{
    constructor(props){
        super(props);

    }


    render(){
        return (
            <div className="home-page">
                    <PageHeader />
                    <div className="container">
                        <div className="centered">
                            <h1>Pan-Pan</h1>
                            <h2>A ferramenta para fazer seu som decolar!</h2>
                        </div>
                        <div className="bottom-center">
                          <Link to="/user/signup">
                            <button className="btn-transparent"type="submit" size="large">Cadastre-se</button>
                          </Link>
                        </div>
                    </div>

            </div>
        )
    }
}
