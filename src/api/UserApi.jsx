
import axios from 'axios';

const UserApi = {
  login: (user) => {
    return axios.post('/components/login', user);
  },
  register: (user) => {
    return axios.post('/components/regis', user);
  },
  resetPassword: (data) => {
    return axios.post('/components/reset', data);
  },
};

export default UserApi;