import React, { Component } from 'react'
import axios from 'axios'

import './CreateMusicForm.css'


export default class CreateMusicForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
	const formData = new FormData(event.target);
        const data = {
            name: formData.get('music-name'),
            genre: formData.get('music-style'),
            band: formData.get('band-name'),
        }
        axios.post('http://localhost:8080/api/music/', data)
        .then(response =>{
            alert("CADASTROU")
        }).catch(function(error){
            if(error.response){
                console.log(error.status)
                console.log(error.data)
                console.log(error.data)
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="page-title">Cadastre uma música</h1>
                <form id="form-container" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" className="form-control" name="music-name" required="required" placeholder="Nome da música"/>
                    </div>
                    <div className="form-group">
                        <label>Estilo:</label>
                        <input type="text" className="form-control" name="music-style" required="required" placeholder="Estilo musical"/>
                    </div>
                    <div className="form-group">
                        <label>Banda:</label>
                        <input type="text" className="form-control" name="band-name" required="required" placeholder="Nome da banda"/>
                    </div>
                    <div className="form-group submit-btn">
                        <input type="submit" className="btn btn-primary" value="Cadastrar"/>
                    </div>
                </form>
            </div>
        )
    }
}
