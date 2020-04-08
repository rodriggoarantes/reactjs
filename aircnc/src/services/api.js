import axios from 'axios';

const PORT = process.env.REACT_APP_HOST_PORT
  ? `:${process.env.REACT_APP_HOST_PORT}`
  : '';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_HOST_PROTOCOL}://${process.env.REACT_APP_HOST_URL}${PORT}`,
});

export default api;
