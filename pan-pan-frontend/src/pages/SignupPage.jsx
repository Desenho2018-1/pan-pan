import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import SignupForm from '../components/User/signup/SignupForm'

export default class SignupPage extends Component{
  constructor(props){
    super(props);
    }

  render(){
    return (
      <div>
        <PageHeader />
        <SignupForm />
      </div>
      )
    }
}
