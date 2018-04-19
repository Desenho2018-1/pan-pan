import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//Insert here the new pages
import SignupForm from './components/User/signup/SignupForm';
import HomePage from './pages/HomePage/HomePage';

const Routes = () =>(
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/user/signup" component={SignupForm} />
  </div>
)

const Router = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById('content'));
registerServiceWorker();
