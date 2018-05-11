import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './view.css'


export default class CreateBandForm extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return (
          <div>
            <div id="initialText">
                Você ainda não está em nehuma band. Tá esperando o que?
            </div>
              <div id='buttonCreateBand'>
                <Link to='/band/create'>cria uma banda</Link>
              </div>
          </div>
        
        )
    }
}
