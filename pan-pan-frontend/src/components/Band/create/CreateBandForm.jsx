import React, { Component } from 'react'
import './CreateBandForm.css'
import axios from 'axios'

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
        /* send json to the API*/
	const header = 'Access-Control-Allow-Origin'
        axios.post('http://localhost:8080/api/bands/', data, header)
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
            <h1 className="page-header">Cadastre sua banda</h1>
                <form id="form-container" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" name="band-name" required="required" placeholder="Sua banda"/>
                    </div>
                    <div className="form-group">
                        <label>Estilo:</label>
                        <input type="text" name="band-style" required="required" placeholder="Estilo musical"/>
                    </div>
                    <div id="buttons-section">
                        <div className="single-btn-section">
                            <label>Imagem:</label>
                            <input type="file" accept="image/*" onChange={this.handleFileChange}/>
                        </div>
                        <div className="single-btn-section">
                            <input type="submit" value="Cadastrar"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
