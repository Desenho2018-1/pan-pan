import React, { Component } from "react";
import './Errors.css'

export default class NotFoundError extends Component{
    render(){
        return (
            <div className="container error">
                <img src={require("../../../assets/imgs/base_monkey_pistola.png")} alt="panpan-puto"
                    className="img-error"/>
                <h1>You made a mistake!</h1>
                    <h3>Esse conteúdo não existe ou está indisponível.</h3>
            </div>
        )
    }
}
