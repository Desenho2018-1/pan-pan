import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        const loginForm = new FormData(event.target);

        var loginInformations = {
            username:loginForm.get('username'),
            password:loginForm.get('password')
        }


        this.props.userLoginRequest(loginInformations)
        .then(
            (success) => {
                this.props.deleteFlashLoading();
                this.props.login(success.data);
                this.context.router.history.push("/user/home");
            })
        .catch(
            () => {
                this.props.deleteFlashLoading()
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'Seu login está incorreto. Tente novamente!'
                });
            }
        );
    }


    render() {
        return (
            <div className="container">
                <h1 className="page-header"> Login </h1>

                <form className="form-container" onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" name="username"
                               id="username" placeholder="Seu username" required/>
                    </div>

                    <div className="form-group">
                        <label>Senha:</label>
                        <input type="password" className="form-control"
                                name="password" id="password"
                                placeholder="Sua senha" required/>
                    </div>

                    <div className="form-group submit-btn" >
                        <button type="submit" className="btn btn-primary">Entrar</button>
                    </div>

                </form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    userLoginRequest: PropTypes.func.isRequired,
    deleteFlashLoading: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,    
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}
