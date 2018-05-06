import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const ShowSetlistSongs = (props) => {
  const { setlists } = props;

  return (
    setlists.map(setlist => <Setlist />)
  );
};

const Setlist = () => (
  <div>
    <FontAwesome
      name="file"
      size="5x"
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />
    Setlist
  </div>
);

ShowSetlistSongs.propTypes = {
  setlists: PropTypes.shape([]).isRequired,
};

export default ShowSetlistSongs;
