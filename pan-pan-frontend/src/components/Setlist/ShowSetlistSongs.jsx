import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './ShowSetlistSongs.css';

const ShowSetlistSongs = (props) => {
  const { setlists } = props;

  const divideRows = (list) => {
    const separateElements = [];

    for (let i = 0; i < list.length; i += 4) {
      const oneRow = [];
      oneRow.push(list.slice(i, i + 4).map(setlist => <Setlist name={setlist.name} />));
      separateElements.push(oneRow.map(itm => <div>{itm}</div>));
    }

    return separateElements;
  };

  return (
    <div>
      {divideRows(setlists)}
    </div>
  );
};

const Setlist = name => (
  <div style={{ display: 'inline-block' }}>
    <div style={{ marginLeft: '2rem' }}>
      <FontAwesome
        name="file"
        size="5x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
      <br />
      <text >{name.name}</text>
    </div>

    <br />
    <br />
    <br />

  </div>
);

ShowSetlistSongs.propTypes = {
  setlists: PropTypes.shape([
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      songs: PropTypes.shape([]),
    },
  ]).isRequired,
};

export default ShowSetlistSongs;
