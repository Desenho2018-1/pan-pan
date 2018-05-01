import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';


const Setlistmodal = (props) => {
  const { isOpen, askToClose } = props;

  return (
    <Modal
      id="setlist_modal"
      isOpen={isOpen}
      shouldCloseOnOverlayClick
    >
      <h1>Setlist Modal</h1>
      <button onClick={askToClose}>
        Close me
      </button>
    </Modal>
  );
};

Setlistmodal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  askToClose: PropTypes.func.isRequired,
};

export default Setlistmodal;
