import axios from 'axios';

export default () => {
  axios.defaults.baseURL = 'http://localhost:5500';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
};
