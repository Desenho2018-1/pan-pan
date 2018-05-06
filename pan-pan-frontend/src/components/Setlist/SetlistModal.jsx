import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from '../Utils/button/Button';

import './SetlistModal.css';

class Setlistmodal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setlistName: '',
    };
  }

  handleChange = (event) => {
    this.setState({ setlistName: event.target.value });
  }

  render() {
    const { isOpen, askToClose, onSubmit } = this.props;
    return (
      <Modal
        id="setlist_modal"
        isOpen={isOpen}
        shouldCloseOnOverlayClick
        onRequestClose={askToClose}
        className="Modal"
      >
        <div className="content">
          <h1>Adicionar Setlist</h1>
          <form onSubmit={() => onSubmit(this.state.setlistName)} >
            <label htmlFor="setlist_name" >
              Nome do setlist
              <br />
              <input type="text" onChange={this.handleChange} />
            </label>
            <br />
            <Button value="Criar setlist" />
          </form >
        </div>
      </Modal >
    );
  }
}

Setlistmodal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  askToClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.instanceOf(Object).isRequired,
};

export default Setlistmodal;
