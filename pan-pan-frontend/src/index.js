import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserRegisterForm from './userRegister/UserRegisterForm';
import UserUpdateForm from './userUpdate/UserUpdateForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserUpdateForm />, document.getElementById('root'));

registerServiceWorker();
