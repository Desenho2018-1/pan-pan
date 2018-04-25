import React, { Component } from 'react'

import CreateBandForm from '../components/Band/create/CreateBandForm'
import PageHeader from '../components/PageHeader/PageHeader'

export default class CreateBandPage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <CreateBandForm />
      </div>
    )
  }
}
