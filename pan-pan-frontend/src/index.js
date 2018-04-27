import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes.js'

import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);


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
