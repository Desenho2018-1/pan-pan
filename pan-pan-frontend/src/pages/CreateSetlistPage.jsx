import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import PageHeader from '../components/PageHeader/PageHeader';
import Setlistmodal from '../components/Setlist/SetlistModal';
import ShowSetlistSongs from '../components/Setlist/ShowSetlistSongs';


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
      setlists: [{}],
    };
  }

  componentWillMount = async () => {
    try {
      // TODO (Roger): Correct this screen so we can access any band.
      const response = await axios.get(this.props.login.user.band[0]._links.setlists.href);
      console.log(response.data);
      this.setState({ setlists: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit = async (setlistName) => {
    const request = {
      name: setlistName,
    };

    try {
      const response =
        await axios.post(this.props.login.user.band[0]._links.setlists.href, request);
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
    const { isOpen, setlists } = this.state;

    let showSetlistSongs = null;

    if (setlists.length > 0) {
      showSetlistSongs = <ShowSetlistSongs setlists={setlists} />;
    }

    return (
      <div>
        <PageHeader />
        <div style={style}>
          {showSetlistSongs}
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

CreateSetlistPage.propTypes = {
  login: PropTypes.shape({
    user: PropTypes.shape({
      band: PropTypes.shape([
        {
          _links: PropTypes.string.isRequired,
        },
      ]).isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  login: state.login,
});

export default connect(mapStateToProps, {})(CreateSetlistPage);
