import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UserHome.css'


export default class UserHomepage extends Component {
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
