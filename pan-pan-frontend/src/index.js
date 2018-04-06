import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './user/User';
import UserRegisterForm from './userRegister/UserRegisterForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserRegisterForm />, document.getElementById('root'));

registerServiceWorker();
