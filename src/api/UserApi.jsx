
import axios from 'axios';

const UserApi = {
  login: (user) => {
    return axios.post('/api/login', user);
  },
  register: (user) => {
    return axios.post('/api/register', user);
  },
  resetPassword: (data) => {
    return axios.post('/api/reset-password', data);
  },
};

export default UserApi;