import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class HomePage extends Component{
  constructor(props){
    super(props);
    }

  render(){
    return (
      <div>
        <h1> Bem-Vindo </h1>
        <Link to="/user/signup">
          <button type="submit">Clica</button>
        </Link>
      </div>
      )
    }
}
