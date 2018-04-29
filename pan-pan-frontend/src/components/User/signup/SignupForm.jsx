import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import PropTypes from 'prop-types';

import 'react-select/dist/react-select.css';
import './SignupForm.css';

import User from '../models/User';
import { STATES } from '../../Utils/consts/States.js';
import { INSTRUMENTS } from '../../Utils/consts/Instruments.js';
import Loading from '../../Utils/loading/Loading';


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedInstrumentsOption: '',
                       selectedStateOption:'',
                     };

        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    createUser(signupForm) {
        let user = new User();

        for (var [key, value] of signupForm.entries()) {
            if (key === 'name') {
                let names = value.split(" ");
                let firstName = names.reverse().pop()
                let lastName = names.reverse().join(" ");

                user.setState({
                    firstName:firstName,
                    lastName:lastName
                });
            }else
            if (key === 'instruments') {
                let instruments = [];
                for (let instrument of this.state.selectedInstrumentsOption) {
                    instruments.push(instrument.value);
                }
                user.setState({instruments:instruments});
            }else
            if (key === 'birthdate') {
                let date = value.split("/").reverse().join('-');
                let birthdate = new Date(date);
                user.setState({birthdate:birthdate});
            }else {
                user.setState({[key]:value});
            }
        }

        return user;
    }

    submitForm(event) {
        event.preventDefault();
        const signupForm = new FormData(event.target);
        let user = this.createUser(signupForm);

        this.props.userSignupRequest(user.state)
        .then(
            () => {
                this.props.deleteFlashLoading()
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'Cadastro realizado com sucesso. Bem vindo!'
                });
            }
        );
    }

    handleChange(type, selectedOption){
        if (type === 'instruments') {
            this.setState({selectedInstrumentsOption:selectedOption})
        }else
        if (type === 'states') {
            this.setState({selectedStateOption:selectedOption})
        }
    }

    render() {
        const { selectedInstrumentsOption, selectedStateOption } = this.state;

        return (
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
                            options={INSTRUMENTS} />
                    </div>

                    <div className="form-group">
                        <label>Estado:</label>
                        <Select
                            name="state"
                            placeholder="Selecioe seu Estado"
                            value={selectedStateOption}
                            onChange={(value) => this.handleChange('states',value)}
                            options={STATES} />
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
                        <input type="password" className="form-control" name="password" id="password" placeholder="Insira uma senha"/>
                    </div>

                    <div className="form-group">
                        <label>Confirme a senha:</label>
                        <input type="password" className="form-control" name="repeat-password" id="repeat-password" placeholder="Sua senha novamente"/>
                    </div>

                    <div className="form-group submit-btn" >
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </div>

                </form>
            </div>

        )
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    deleteFlashLoading: PropTypes.func.isRequired,
}

export default SignupForm;
