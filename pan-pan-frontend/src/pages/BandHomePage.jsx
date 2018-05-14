import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader';
import BandHome from '../components/Band/home/BandHome';
import PermissionRequired from '../components/Utils/permission/PermissionRequired';


const BandHomePage = (props) => {
    const { isAuthenticated, user } = props.login;

    const byBandName = (band) => {
        return band.name === props.match.params.name;
    }

    const getBand = () =>{
        let band = {name: ""}
        if (isAuthenticated && user.band) {
            band = user.band.find(byBandName);
        }

        if (typeof band === 'undefined') {
            band = {name: ""}
        }

        return band;
    }

    return (
        <PermissionRequired loggedIn={isAuthenticated}>
            <PageHeader />
            <BandHome band={getBand()} />
        </PermissionRequired>
    );
};

BandHomePage.propTypes = {
    login: PropTypes.shape({
        isAuthenticated: PropTypes.bool.isRequired,
        user: PropTypes.shape({}).isRequired,
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({}).isRequired,
    }).isRequired,
};

const mapStateToProps = state => (
    {
        login: state.login,
    }
);

export default connect(mapStateToProps, {})(BandHomePage);
