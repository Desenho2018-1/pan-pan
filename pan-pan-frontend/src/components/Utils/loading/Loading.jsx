import React, { Component } from "react";
import PropTypes from 'prop-types';

import './Loading.css'


export default class Loading extends Component{
    render(){
        const isLoading = this.props.isLoading;

        if (isLoading) {
            return (
                <div className="loading">
                    <div className="modal fade in" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <i className="fa fa-circle-o-notch fa-spin"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(<div className="modal"></div>)
        }

    }
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}
