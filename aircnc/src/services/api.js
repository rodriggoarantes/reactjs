import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_HOST_PROTOCOL}://${process.env.REACT_APP_HOST_URL}:${process.env.REACT_APP_HOST_PORT}`,
});

export default api;
