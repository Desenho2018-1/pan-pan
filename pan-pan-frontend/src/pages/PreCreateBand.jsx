import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader'
import View from '../components/Band/create/view'


export default class PreCreateBand extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <View />
    </div>
    )
  }
}
