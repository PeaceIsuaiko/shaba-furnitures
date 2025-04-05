import axios from 'axios';

const CartApi = {
  getCart: () => {
    return axios.get('/api/cart');
  },
  addProductToCart: (product) => {
    return axios.post('/api/cart', product);
  },
};

export default CartApi;