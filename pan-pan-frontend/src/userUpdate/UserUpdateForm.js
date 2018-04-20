import React, { Component } from "react";
import axios from "axios";
import UserRegisterForm from '../userRegister/UserRegisterForm';
import User from '../user/User';

class UserUpdateForm extends UserRegisterForm{
  constructor(props){
    super(props);
      this.stringToVector = this.stringToVector.bind(this);
      this.parseDate = this.parseDate.bind(this);
      this.submitForm = this.submitForm.bind(this);

      axios.get(`http://localhost:8080/user/oi`)
      .then(res => {
        const user = res.data;
        this.setState({ firstName: user.firstName,
                        lastName: user.lastName,
                        birthdate: user.birthdate,
                        city: user.city,
                        state: user.state,
                        instrument: user.instruments,
                        email: user.email,
                        username: user.username,
                        password: user.password,
                        role: user.role,
                        active: user.active });
      })

  }



}
export default UserUpdateForm
