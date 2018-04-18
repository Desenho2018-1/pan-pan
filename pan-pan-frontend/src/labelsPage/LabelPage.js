import React, { Component } from "react";

import './LabelPage.css'

class LabelPage extends Component{
  constructor(props){
    super(props);
      this.state = {
        label: props.label
      }
    }
    render(){
      return (
        <label className="label-text-font" ><b>{this.state.label}</b></label>
      )
    }
  }
export default LabelPage
