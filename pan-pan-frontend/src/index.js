import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './user/User';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<User />, document.getElementById('content'));
registerServiceWorker();
