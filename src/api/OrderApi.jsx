import axios from 'axios';

const OrderApi = {
  placeOrder: (order) => {
    return axios.post('/api/orders', order);
  },
};

export default OrderApi;