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

        return <h1>Ainda em nenhuma banda?</h1>
    }

    render() {
        const user = this.props.login.user;
        console.log(user);
        return (
            <div className="container">
                <h1 className="page-header"> Bem-vindo! </h1>
                {this.renderBand(user.band)}
                <Link to="/band/create">
                    <button type="submit" className="btn btn-primary">
                        Crie sua banda!
                    </button>
                </Link>


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
