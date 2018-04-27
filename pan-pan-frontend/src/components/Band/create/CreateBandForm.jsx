import React, { Component } from 'react'
import axios from 'axios'

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
        const data = {
            name: formData.get('band-name'),
            genre: formData.get('band-style'),
	        members: [],
	        creationDate: new Date(),
            //image: this.state.file,                       
        }
        axios.post('http://localhost:8080/api/bands/', data)
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

    handleFileChange(event){
        this.setState({file:event.target.files[0]})
    }

    render() {
        return (
            <div className="container">
                <h1 className="page-title">Cadastre sua banda</h1>
                <form id="form-container" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" className="form-control" name="band-name" required="required" placeholder="Sua banda"/>
                    </div>
                    <div className="form-group">
                        <label>Estilo:</label>
                        <input type="text" className="form-control" name="band-style" required="required" placeholder="Estilo musical"/>
                    </div>
                    <div className="form-group">
                        <label>Imagem:</label>
                        <input type="file" className="btn btn-priamry" accept="image/*" onChange={this.handleFileChange}/>
                    </div>
                    <div className="form-group" className="submit-btn">
                        <input type="submit" className="btn btn-primary" value="Cadastrar"/>
                    </div>
                </form>
            </div>
        )
    }
}
