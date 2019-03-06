import React, { Component } from 'react';
import './Errors.css';

export default class PermissionError extends Component {
    render() {
        return (
            <div className="container error">
                <img src={require("../../../assets/imgs/base_monkey_pistola.png")} alt="panpan-puto"
                        className="img-error"/>
                <h1>You shall not pass!</h1>
                    <h3>Esse conteúdo não é permitido a usuários não identificados.</h3>
            </div>
        );
    }
}
