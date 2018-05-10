import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader';
import BandHome from '../components/Band/home/BandHome';
import PermissionRequired from '../components/Utils/permission/PermissionRequired';


const BandHomePage = (props) => {
  const { band } = props.location.state;
  const { isAuthenticated } = props.login;

  console.log(props);

  return (
    <PermissionRequired loggedIn={isAuthenticated}>
      <PageHeader />
      <BandHome band={band} />
    </PermissionRequired>
  );
};

BandHomePage.propTypes = {
  login: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({}).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({}).isRequired,
  }).isRequired,
};

const mapStateToProps = state => (
  {
    login: state.login,
  }
);

export default connect(mapStateToProps, {})(BandHomePage);
