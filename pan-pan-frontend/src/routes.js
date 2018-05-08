import React from "react";
import { Route} from 'react-router-dom';

//Insert here the new pages
import CreateBandPage from './pages/CreateBandPage';
import CreateMusicPage from './pages/CreateMusicPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserHomePage from './pages/UserHomePage';
import BandHomePage from './pages/BandHomePage';
import CreateRehearsalPage from './pages/CreateRehearsalPage';
import AddMemberPage from './pages/AddMemberPage'


export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/user/signup" component={SignupPage} />
    <Route exact path="/user/login" component={LoginPage} />
    <Route exact path="/user/home" component={UserHomePage} />
    <Route exact path="/band/home" component={BandHomePage} />
    <Route exact path="/band/create" component={CreateBandPage}/>
    <Route exact path="/band/addMember" component={AddMemberPage}/>
    <Route exact path="/music/create" component={CreateMusicPage}/>
	<Route exact path="/rehearsal/create" component={CreateRehearsalPage}/>
  </div>
)
