import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './BandHome.css'

class BandHome extends Component {

    render() {
        const user = this.props.login.user;
        const band = this.props.band

        return  <div className="container band-home">
                    <div className="band-container">
                        <div className="page-header">
                            <h1>{band.name}</h1>
                        </div>
                        <div className="elements">

                            <div className="element">
                                <Link to="#">
                                    <button type="submit">
                                        <span className="fas fa-users" aria-hidden="true"></span>
                                    </button>
                                    <p className="btn-text">Membros</p>
                                </Link>
                            </div>

                            <div className="element">
                                <Link to="#">
                                    <button type="submit">
                                        <span className="glyphicon glyphicon-music" aria-hidden="true"></span>
                                    </button>
                                    <p className="btn-text">Músicas</p>
                                </Link>
                            </div>

                            <div className="element">
                                <Link to="#">
                                    <button type="submit">
                                        <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                    </button>
                                    <p className="btn-text">SetList</p>
                                </Link>
                            </div>

                            <div className="element">
                                <Link to="#">
                                    <button type="submit">
                                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                                    </button>
                                    <p className="btn-text">Ensaios</p>
                                </Link>
                            </div>

                            <div className="element">
                                <Link to="#">
                                    <button type="submit">
                                        <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
                                    </button>
                                    <p className="btn-text">Docs</p>
                                </Link>
                            </div>

                            <div className="element">
                                <Link to="#">
                                    <button type="submit">
                                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                    </button>
                                    <p className="btn-text">Notificações</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { })(BandHome);
