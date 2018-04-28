import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../components/Utils/consts/consts.css'
import PermissionRequired from '../components/Utils/permission/PermissionRequired'
import PageHeader from '../components/PageHeader/PageHeader'

export default class HomePage extends Component{
    constructor(props){
        super(props);

    }


    render(){
        return (
            <div>
                    <PageHeader />
                    <div class="container">
                        <img src={require("../assets/imgs/show.jpg")} alt="show"/>
                        <div class="centered">
                            <h1>Pan-Pan</h1>
                            <h2>A ferramenta para fazer seu som decolar!</h2>
                        </div>
                        <div class="bottom-center">
                          <Link to="/user/signup">
                            <button class="btn-transparent"type="submit" size="large">Cadastre-se</button>
                          </Link>
                        </div>
                    </div>


                    <h1> Bem-Vindo </h1>
                    <Link to="/user/signup">
                        <button type="submit">Clica</button>

                        </Link>
                    <Link to="/user/login">
                        <button type="submit" >Login</button>
                    </Link>

                    <Link to="/band/create">
                        <button type="submit">Banda</button>
                    </Link>


            </div>
        )
    }
}
