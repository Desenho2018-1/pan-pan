import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './UserHome.css'


class UserHome extends Component {

    renderBand(bands){

        if (bands) {
            for (var band of bands) {

                return <div>
                            <h1>Name:</h1>{band.name}
                            <h1>Genre:</h1>{band.genre}
                        </div>
            }
        }

        return <div>
                    <div className="page-header">
                        <span className="glyphicon glyphicon-music" aria-hidden="true"></span>
                        <h1>"Dancing with myself"</h1>
                        <span className="glyphicon glyphicon-music" aria-hidden="true"></span>
                        <h4>Você ainda não está em nenhuma banda. Tá esperando o que?</h4>
                    </div>
               </div>

    }

    render() {
        const user = this.props.login.user;
        console.log(user);
        return (
            <div className="container user-home">
                <div className="band-container">
                    {this.renderBand(user.band)}
                    <div className="create-band">
                        <Link to="/band/create">
                            <button type="submit">
                                <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            </button>
                            <p>Criar Banda</p>
                        </Link>
                    </div>
                </div>
            </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { })(UserHome);
