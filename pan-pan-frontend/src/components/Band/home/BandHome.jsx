import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './BandHome.css'


class BandHome extends Component {

    render() {
        const user = this.props.login.user;
        console.log(user);
        return (
            <div className="container user-home">
                Oi, {this.props.band.name}!
            </div>


        )
    }
}

BandHome.propTypes = {
    band: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, { })(BandHome);
