import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader'
import View from '../components/User/home/UserHome'


export default class UserHomePage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <View />
    </div>
    )
  }
}
