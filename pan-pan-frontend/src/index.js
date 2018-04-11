import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserRegisterForm from './userRegister/UserRegisterForm'
import UserLoginForm from './userLogin/UserLoginForm'
import registerServiceWorker from './registerServiceWorker';
import User from './user/User'

ReactDOM.render(<UserLoginForm />, document.getElementById('root'));

registerServiceWorker();
