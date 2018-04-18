import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import './index.css';

import UserRegisterForm from './userRegister/UserRegisterForm';
import UserLoginForm from './userLogin/UserLoginForm';
import registerServiceWorker from './registerServiceWorker';
import BandCreationForm from './bandCreation/BandCreationForm';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const App = () => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/user/register">Register</Link>
      <Link to="/user/login">Login</Link>
      <Link to="/band/creation">Band Creation</Link>
    </div>
    <div>
      <Route path="/" component={Home} />
      <Route path="/user/register" component={UserRegisterForm} />
      <Route path="/user/login" component={UserLoginForm} />
      <Route path="/band/creation" component={BandCreationForm} />
    </div>
  </div>
);

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();
