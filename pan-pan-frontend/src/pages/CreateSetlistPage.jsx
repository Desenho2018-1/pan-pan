import React from 'react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import PageHeader from '../components/PageHeader/PageHeader';
import Setlistmodal from '../components/Setlist/SetlistModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

class CreateSetlistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleSubmit = async (setlistName) => {
    const request = {
      name: setlistName,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/bands/3/setlists/', request);
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  toggleModal = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <PageHeader />
        <div style={style}>
          <FontAwesome
            name="plus"
            size="5x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            onClick={() => this.toggleModal()}
          />
        </div>
        <Setlistmodal isOpen={isOpen} askToClose={this.toggleModal} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CreateSetlistPage;
