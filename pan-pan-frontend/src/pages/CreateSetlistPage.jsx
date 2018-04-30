import React from 'react';
import axios from 'axios';
import PageHeader from '../components/PageHeader/PageHeader';

const createSetlist = async (setlistName) => {
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

const CreateSetlistPage = () => (
  <div>
    <PageHeader />
    <button onClick={createSetlist('Mamãe')} >
      Oh my god!
    </button>
  </div>
);

export default CreateSetlistPage;
