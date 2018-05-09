import React, { Component } from 'react'
import axios from 'axios'

import './CreateMusicForm.css'


export default class CreateMusicForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
          nameMusic:'',
          styleMusic:'',
          bandName:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setMusicName = this.setMusicName.bind(this);
        this.setStyleMusic = this.setStyleMusic.bind(this);
        this.setBandName = this.setBandName.bind(this);
    }

    handleSubmit(event){
      event.preventDefault();

        console.log(this.state.nameMusic);
        console.log(this.state.styleMusic);
        console.log(this.state.bandName);
        axios.get('http://localhost:8080/song/'+this.state.nameMusic+'/'+this.state.styleMusic+'/'+this.state.bandName)
        .then(response =>{console.log(response.data);})
    }

    setMusicName(event){
      this.setState({nameMusic: event.target.value})
      console.log(this.state.nameMusic);

    }

    setStyleMusic(event){
      this.setState({styleMusic: event.target.value})
      console.log(this.state.styleMusic);

    }
    setBandName(event){
      this.setState({bandName: event.target.value})
      console.log(this.state.bandName);

    }

    render() {
        return (
            <div className="container">
                <h1 className="page-title">Cadastre uma música</h1>
                <form id="form-container" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label>Nome:</label>
                        <input type="text" value={this.state.nameMusic} onChange={this.setMusicName} className="form-control" name="music-name" required="required" placeholder="Nome da música"/>
                    </div>
                    <div className="form-group">
                        <label>Estilo:</label>
                        <input type="text" value={this.state.styleMusic} onChange={this.setStyleMusic} className="form-control" name="music-style" required="required" placeholder="Estilo musical"/>
                    </div>
                    <div className="form-group">
                        <label>Banda:</label>
                        <input type="text" value={this.state.bandName} onChange={this.setBandName} className="form-control" name="band-name" required="required" placeholder="Nome da banda"/>
                    </div>
                    <div className="form-group submit-btn">
                        <input type="submit" className="btn btn-primary" value="Cadastrar" />
                    </div>
                </form>
            </div>
        )
    }
}
