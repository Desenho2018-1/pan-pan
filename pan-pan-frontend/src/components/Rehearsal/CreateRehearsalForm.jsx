import React, { Component } from 'react'
import InputMask from 'react-input-mask';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import axios from 'axios';

const FAKE_SETLISTS = [
    {label: 'Chuchu', value: 'chuchu'},
    {label: 'Cenoura', value: 'cenoura'},
    {label: 'Batata', value: 'batata'},
]
export default class componentName extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedSetlistsOption: '',};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getSetlists(){

    }

    handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            date: new Date(formData.get('rehearsal-date')),
            setlists: formData.get('setlists'),
        }

        axios.post('http://localhost:8080/api/rehearsals', data)
        .then(response => console.log(response.data))
    }

    handleChange = (type, selectedOption) => {
        this.setState({selectedSetlistsOption:selectedOption})
    }

    render() {
        const {selectedSetlistsOption} = this.state;
        return (
            <div className="container">
            <h1 className="page-title">Defina um ensaio</h1>
            <form className="form-container" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Data do ensaio:</label>
                    <InputMask className="form-control"
                        name="rehearsal-date"
                        id="rehearsal-date" placeholder="  /  /    "
                        mask="99/99/9999" maskChar=" "/>
                </div>
                <div className="form-group">
                    <label>Setlists:</label>
                    <Select
                        name="setlists"
                        multi
                        placeholder="Selecione os setlists do ensaio"
                        value={selectedSetlistsOption}
                        onChange={(value) => this.handleChange('setlists',value)}
                        options={FAKE_SETLISTS}
                    />
                </div>
                <div className="form-group submit-btn">
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
            </div>
        )
    }
}
