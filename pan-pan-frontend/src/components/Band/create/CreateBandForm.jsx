import React, { Component } from 'react'
import './CreateBandForm.css'

export default class CreateBandForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            file: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);        
    }

    handleSubmit(event){
        const formData = new FormData(event.target);
        const bandData = {
            bandName: formData.get('band-name'),
            bandStyle: formData.get('band-style'),
            image: this.state.file,                       
        }
        /* send json to the API*/
    }

    handleFileChange(event){
        this.setState({file:event.target.files[0]})
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
                            <input type="file" accept="image/*" onChange={this.handleFileChange}/>
                        </div>
                        <div className="single-btn-section">
                            <input type="submit" value="Cadastrar"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
