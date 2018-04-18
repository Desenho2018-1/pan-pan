import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import '../base/base.css';
import './BandCreationForm.css';
import HeaderPage from '../headerPage/HeaderPage';
import LabelPage from '../labelsPage/LabelPage';
import axios from "axios";

export default class BandCreationForm extends PureComponent {
    render() {
        return (
        <div>
            <form id="band-form" onSubmit={this.submitForm}>
            <div id="label-format-band-name">
                <LabelPage label="Nome:" />
            </div>
            <div id="input-text-format">
                <input type="text" required="required" placeholder="Sua banda" name="band-name"></input>
            </div>
            <div id="label-format-band-style">
                <LabelPage label="Estilo:" />
            </div>
            <div id="input-text-format">
                <input type="text" required="required" placeholder="Qual estilo musical?" name="band-style"></input>
            </div>
            <button id="select-image-button" type="button">Selecione uma foto</button>
            <button id="submit-button" type="submit" value="register">Cadastrar</button>
            </form>
        </div>
        )
    }
}
