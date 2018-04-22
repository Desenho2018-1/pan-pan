import React, { Component } from 'react';
import axios from 'axios';
import './SignupForm.css';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import User from '../models/User';

const STATES = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'Tocantins', value: 'TO' },
];


const INSTRUMENTS = [
	{ label: 'Vocal', value: 'singer' },
	{ label: 'Violão', value: 'guitar' },
	{ label: 'Guitarra', value: 'eletric_guitar' },
	{ label: 'Contrabaixo', value: 'eletric_bass' },
	{ label: 'Bateria', value: 'drums' },
];

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedInstrumentsOption: '',
                  selectedStateOption:'',
                  };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    const signupForm = new FormData(event.target);
    let user_obj = new User();

    for (var [key, value] of signupForm.entries()) {
      if (key == 'name') {
        let names = value.split(" ");
        let firstName = names.reverse().pop()
        let lastName = names.reverse().join(" ");

        user_obj.setState({
          firstName:firstName,
          lastName:lastName
        });
      }
      else
      if (key == 'instruments') {
        let instruments = [];
        for (let instrument of this.state.selectedInstrumentsOption) {
          instruments.push(instrument.value);
        }
        user_obj.setState({instruments:instruments});
      }else
        if (key == 'birthdate') {
          let date = value.replace(/\//g,'-');
          let birthdate = new Date(date);
          user_obj.setState({birthdate:birthdate});
        }
        else {
          user_obj.setState({[key]:value});
        }
    }

    console.log(user_obj);

    axios.post('http://localhost:8080/api/users', user_obj.state)
      .then(response => console.log(response.data))
  }

  handleChange = (type, selectedOption) => {
    if (type == 'instruments') {
        this.setState({selectedInstrumentsOption:selectedOption})
    }
    else if (type == 'states') {
      this.setState({selectedStateOption:selectedOption})
    }
  }

  render() {
    const { selectedInstrumentsOption, selectedStateOption } = this.state;

    var html =
      <div className="container">

        <h1 className="page-header"> Signup </h1>

        <form className="form-container" onSubmit={this.submitForm}>

          <div className="form-group">
            <label>Nome:</label>
            <input type="text" className="form-control" name="name"
                   id="name" placeholder="Insira seu nome"/>
          </div>

          <div className="form-group">
            <label>E-mail:</label>
            <input type="text" className="form-control" name="email"
                   id="email" placeholder="Insira seu e-mail"/>
          </div>

          <div className="form-group">
            <label>Data de nascimento:</label>
            <InputMask className="form-control" name="birthdate"
                       id="birthdate" placeholder="  /  /    "
                       mask="99/99/9999" maskChar=" "/>
          </div>

          <div className="form-group">
            <label>Instrumentos:</label>
            <Select
              name="instruments"
              multi
              placeholder="Selecione seus instrumentos"
              value={selectedInstrumentsOption}
              onChange={(value) => this.handleChange('instruments',value)}
              options={INSTRUMENTS}
            />
          </div>

          <div className="form-group">
            <label>Estado:</label>
            <Select
              name="state"
              placeholder="Selecioe seu Estado"
              value={selectedStateOption}
              onChange={(value) => this.handleChange('states',value)}
              options={STATES}
            />
          </div>

          <div className="form-group">
            <label>Cidade:</label>
            <input type="text" className="form-control" name="city" id="city" placeholder="Insira sua cidade"/>
          </div>

          <div className="form-group">
            <label>Username:</label>
            <input type="text" className="form-control" name="username" id="username" placeholder="Escolha um username"/>
          </div>

          <div className="form-group">
            <label>Senha:</label>
          <input type="text" className="form-control" name="password" id="password" placeholder="Insira uma senha"/>
          </div>

          <div className="form-group">
            <label>Confirme a senha:</label>
            <input type="password" className="form-control" name="repeat-password" id="repeat-password" placeholder="Sua senha novamente"/>
          </div>


          <div className="form-group" className="submit-btn">
            <button type="submit" className="btn btn-primary">Cadastrar</button>
          </div>

        </form>
      </div>

    return html;
  }
}
