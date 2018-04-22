import React, { Component } from "react";
import PageHeader from '../components/PageHeader/PageHeader';
import SignupForm from '../components/User/signup/SignupForm'

export default class SignupPage extends Component{
  
  render(){
    return (
      <div>
        <PageHeader />
        <SignupForm />
      </div>
      )
    }
}
