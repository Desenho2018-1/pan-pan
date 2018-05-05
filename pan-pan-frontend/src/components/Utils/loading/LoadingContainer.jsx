import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from './Loading';

class LoadingContainer extends Component{
    render(){
        const isLoading = this.props.message.isLoading
        return (
            <Loading isLoading={isLoading} />
        )
}
}

LoadingContainer.propTypes = {
    message: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        message: state.flashLoading
    }
}

export default connect(mapStateToProps, {})(LoadingContainer)
