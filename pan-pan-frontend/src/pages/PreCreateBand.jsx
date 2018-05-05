import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../components/PageHeader/PageHeader'

export default class PreCreateBand extends Component {
  render() {
    return (
      <div>
        <PageHeader />
      </div>
    )
  }
}
