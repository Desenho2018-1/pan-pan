import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import '../base/base.css';
import './BandCreationForm.css';
import HeaderPage from '../headerPage/HeaderPage';
import LabelPage from '../labelsPage/LabelPage';
import axios from "axios";

export default class BandCreationForm extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            bandName: "",
            bandStyle: "",
            bandImagePath: "",
            ownerId: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const bandData = {
            bandName: formData.get("band-name"),
            bandStyle: formData.get("band-style"),
            bandImagePath: "",
            ownerId: "",
        }
        alert("Banda " + bandData.bandName + " cadastrada!")
    }

    render() {
        return (
        <div>
            <form id="band-form" onSubmit={this.handleSubmit}>
            <div id="label-format-band-name">
                <LabelPage label="Nome:" />
            </div>
            <div id="input-text-format">
                <input type="text" required="required" placeholder="Sua banda" name="band-name"/>
            </div>
            <div id="label-format-band-style">
                <LabelPage label="Estilo:" />
            </div>
            <div id="input-text-format">
                <input type="text" required="required" placeholder="Qual estilo musical?" name="band-style"/>
            </div>
            <button id="select-image-button" type="button">Selecione uma foto</button>
            <button id="submit-button" type="submit" value="register">Cadastrar</button>
            </form>
        </div>
        )
    }
}
