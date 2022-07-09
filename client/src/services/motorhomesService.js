import axios from 'axios';

const getMotorhomes = async () => {
  const motorhomes = await axios.get('/api/motorhomes');

  return motorhomes.data;
};

const getMotorhome = async (id) => {
  const motorhome = await axios.get(`/api/motorhomes/${id}`);

  return motorhome.data;
};

const createMotorhome = async (data) => {
  const motorhome = await axios.post(`/api/motorhomes/`, data);

  return motorhome.data;
};

const motorhomesService = {
  getMotorhomes,
  getMotorhome,
  createMotorhome,
};

export default motorhomesService;
