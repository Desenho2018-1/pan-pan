import React, { Component } from "react";
import { Link } from 'react-router-dom';

import PermissionRequired from '../components/Utils/permission/PermissionRequired'

export default class HomePage extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
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
