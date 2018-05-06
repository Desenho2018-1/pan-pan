import React from 'react';
import { Route } from 'react-router-dom';

// Insert here the new pages
import CreateBandPage from './pages/CreateBandPage';
import CreateMusicPage from './pages/CreateMusicPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PreCreateBand from './pages/PreCreateBand';
import CreateRehearsalPage from './pages/CreateRehearsalPage';
import AddMemberPage from './pages/AddMemberPage';
import CreateSetlistPage from './pages/CreateSetlistPage';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/band/create" component={CreateBandPage} />
    <Route exact path="/music/create" component={CreateMusicPage} />
    <Route path="/user/signup" component={SignupPage} />
    <Route exact path="/band/addMember" component={AddMemberPage} />
    <Route path="/user/login" component={LoginPage} />
    <Route path="/user/view" component={PreCreateBand} />
    <Route exact path="/rehearsal/create" component={CreateRehearsalPage} />
    <Route path="/setlist/create" component={CreateSetlistPage} />
  </div>
);
