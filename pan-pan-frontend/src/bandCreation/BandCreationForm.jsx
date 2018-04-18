import React, { PureComponent } from 'react'
import LabelPage from '../labelsPage/LabelPage';
import HeaderPage from '../headerPage/HeaderPage';
import axios from "axios";

import '../base/base.css';
import './BandCreationForm.css';

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
                <HeaderPage userName='' />
                <div className="band-creation-form">
                    <div className="form-group" align="center">
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
                            <button id="select-image-button" type="button" className="btn btn-secondary btn-lg">Selecione uma foto</button>
                            <button id="submit-button" type="submit" value="submit" className="btn btn-secondary btn-lg">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
