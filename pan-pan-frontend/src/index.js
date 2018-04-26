import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//Insert here the new pages
import CreateBandPage from './pages/CreateBandPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import CreateRehearsalPage from './pages/CreateRehearsalPage';

const Routes = () =>(
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/band/create" component={CreateBandPage}/>
    <Route path="/user/signup" component={SignupPage} />
    <Route exact path="/rehearsal/create" component={CreateRehearsalPage}/>
  </div>
)

const Router = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById('content'));
registerServiceWorker();
