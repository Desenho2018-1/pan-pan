import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './UserHome.css'


class UserHome extends Component {

    renderNewBandOption(){
        return  <div className="element">
                    <Link to="/band/create">
                        <button type="submit">
                            <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                        </button>
                        <p className="btn-text">Criar Banda</p>
                    </Link>
                </div>
    }


    renderJoinBandOption(){
        return  <div className="element">
                    <Link to="#">
                        <button type="submit">
                            <span className="far fa-handshake" aria-hidden="true"></span>
                        </button>
                        <p className="btn-text">Participe de uma Banda</p>
                    </Link>
                </div>
    }



    renderBands(bands){
        let content = [];
        if (bands) {
            for (let band of bands) {
                content.push(<div className="element">
                                <Link to={{ pathname: '/band/home', state: { band: band} }}>
                                    <button type="submit">
                                        <span className="fas fa-people-carry" aria-hidden="true"></span>
                                    </button>
                                    <p className="btn-text">{band.name}</p>
                                </Link>
                            </div>);
            }
        }

        content.push(this.renderNewBandOption());
        content.push(this.renderJoinBandOption())

        return(<div className="elements">{content}</div>)
    }

    renderHeaderBand(bands){
        let content = [];
        if (!bands) {
            return  <div className="page-header">
                        <span className="glyphicon glyphicon-music" aria-hidden="true"></span>
                            <h1>"Dancing with myself"</h1>
                        <span className="glyphicon glyphicon-music" aria-hidden="true"></span>
                        <h4>Você ainda não está em nenhuma banda. Tá esperando o que?</h4>
                    </div>
        } else {
            return <div className="page-header">
                        <h1>Bem vindo!</h1>
                    </div>
        }
    }

    render() {
        const user = this.props.login.user;

        return  <div className="container user-home">
                    <div className="band-container">
                        {this.renderHeaderBand(user.band)}
                        {this.renderBands(user.band)}
                    </div>
                </div>
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { })(UserHome);
