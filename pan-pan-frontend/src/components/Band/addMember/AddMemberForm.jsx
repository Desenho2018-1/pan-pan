import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class AddMemberForm extends Component{
  constructor(props){
    super(props);

    }

  render (){
    return (
    <div className="container">
        <h1 className="page-title">Procure o Membro para adicionar a banda</h1>
        <form id="form-container">
            <div className="form-group">
                <label>Nome:</label>
                <input type="text" className="form-control" name="band-name" required="required" placeholder="Sua banda"/>
            </div>
        </form>
      </div>
    )
  }
}
