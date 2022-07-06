import axios from 'axios';

const getMotorhomes = async () => {
  const motorhomes = await axios.get('/api/motorhomes');

  return motorhomes.data;
};

const motorhomesService = {
  getMotorhomes,
};

export default motorhomesService;
