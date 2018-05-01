import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';


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
      >
        <h1>Setlist Modal</h1>
        <form onSubmit={() => onSubmit(this.state.setlistName)} >
          <label htmlFor="setlist_name" >
            Nome do setlist
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" className="btn btn-primary" value="Criar setlist" />
        </form >
        <button onClick={askToClose}>
          Close me
        </button>
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
