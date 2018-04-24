import React from "react";
import { Route} from 'react-router-dom';

//Insert here the new pages
import CreateBandPage from './pages/CreateBandPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/band/create" component={CreateBandPage}/>
    <Route path="/user/signup" component={SignupPage} />
    <Route path="/user/login" component={LoginPage} />
  </div>
)
