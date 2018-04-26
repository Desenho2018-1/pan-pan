import React, { Component } from 'react'
import AddMemberForm from '../components/Band/addMember/AddMemberForm'
import PageHeader from '../components/PageHeader/PageHeader'


export default class AddMemberPage extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <AddMemberForm />
      </div>
    )
  }
}
