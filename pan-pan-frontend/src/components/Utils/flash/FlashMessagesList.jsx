import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../../actions/Utils/FlashMessages.js'

class FlashMessagesList extends Component{
    render(){
        const messages = this.props.messages.map(message =>
            <FlashMessage key={message.id} message={message} deleteFlashMessage={ this.props.deleteFlashMessage}
                          redirectTo={this.props.redirectTo}/>
        );

        return (
            <div>{messages}</div>
        )
}
}

FlashMessagesList.propTypes = {
    messages: PropTypes.array.isRequired,
    redirectTo: PropTypes.string.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList)
