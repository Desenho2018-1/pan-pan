import React from 'react';
import axios from 'axios';
import PageHeader from '../components/PageHeader/PageHeader';
import Setlistmodal from '../components/Setlist/SetlistModal';

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
        <button onClick={() => this.toggleModal()} >
          Click here to open the modal
        </button>
        <Setlistmodal isOpen={isOpen} askToClose={this.toggleModal} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CreateSetlistPage;
