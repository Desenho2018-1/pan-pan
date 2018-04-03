import React, { Component } from 'react';
import logo from './panis.png';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var html =
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pan-Pan</h1>
        </header>
      </div>;

    return html;
  }
}

export default App;
