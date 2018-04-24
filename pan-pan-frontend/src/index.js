import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes.js'

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)

)

const Router = () => (
  <BrowserRouter>
    {routes}
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, document.getElementById('content'));
registerServiceWorker();
