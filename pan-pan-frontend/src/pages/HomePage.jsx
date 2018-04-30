import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../assets/static/homepage.css'
import PageHeader from '../components/PageHeader/PageHeader'

export default class HomePage extends Component{
    render(){
        return (
            <div className="home-page">
                    <PageHeader />
                        <div className="centered">
                            <h1>Pan-Pan</h1>
                            <h2>A ferramenta para fazer seu som decolar!</h2>
                        </div>
                        <div className="bottom-center">
                          <Link to="/user/signup">
                            <button  className="btn btn-transparent" type="submit" size="large">Cadastre-se</button>
                          </Link>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                 <span className="glyphicon glyphicon-list"></span>
                                 <p font-color="white">Organize sua setlist</p>
                            </div>
                            <div className="col-md-3">
                                 <span className="glyphicon glyphicon-user"></span>
                                 <p font-color="white">Gerencie sua banda</p>
                            </div>
                            <div className="col-md-3">
                                 <span className="glyphicon glyphicon-music"></span>
                                 <p font-color="white">Compartilhe arquivos</p>
                            </div>
                        </div>
            </div>
        )
    }
}
