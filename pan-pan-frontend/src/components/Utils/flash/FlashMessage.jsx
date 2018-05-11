import React, { Component } from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './FlashMessage.css'


export default class FlashMessage extends Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.deleteFlashMessage(this.props.message.id);
        this.context.router.history.push(this.props.redirectTo);
    }

    render(){
        const {type, text } = this.props.message;

        return (
            <div className="flashmessage">
                <div className="modal fade in" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className={classnames('modal-header',{
                                'modal-success': type === 'success',
                                'modal-danger': type === 'error'
                            })}>
                                <h2 className="modal-title center">
                                    {type === 'success' ? 'Sucesso!' : 'Oppss...'}
                                </h2>
                            </div>

                            <div className="modal-body">
                                <h4>{text}</h4>
                            </div>

                            <div className="modal-footer">
                                <button type="button" onClick={this.onClick} className="btn btn-primary" data-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    redirectTo: PropTypes.string.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

FlashMessage.contextTypes = {
    router: PropTypes.object.isRequired
}
