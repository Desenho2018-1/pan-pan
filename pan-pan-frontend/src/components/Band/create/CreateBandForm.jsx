import React, { Component } from 'react'

export default class CreateBandForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        const formData = new FormData(event.target);
        const bandData = {
            bandName: formData.get('band-name'),
            bandStyle: formData.get('band-style'),
            /* add logic to imagePath coming from button*/
            imagePath: "",                        
        }
        alert(bandData.bandName);
        /* send json to the API*/
    }

    render() {
        return (
        <div>
            <div id="form-div">
                <form id="band-form" onSubmit={this.handleSubmit}>
                    <div id="band-name-section">
                        <div className="label-section">
                            <label>Nome:</label>
                        </div>
                        <div className="input-section">
                            <input type="text" name="band-name" required="required"/>
                        </div>
                    </div>
                    <div id="band-style-section">
                        <div className="label-section">
                            <label>Estilo:</label>
                        </div>
                        <div className="input-section">
                            <input type="text" name="band-style" required="required"/>
                        </div>
                    </div>
                    <div id="buttons-section">
                        <div className="single-btn-section">
                            <input type="button" onclick="" value="Selecionar imagem"/>
                        </div>
                        <div className="single-btn-section">
                            <input type="submit" onclick="" value="Cadastrar"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
