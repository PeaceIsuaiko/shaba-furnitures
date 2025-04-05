import axios from 'axios';

const CustomFurnitureApi = {
  createCustomFurniture: (furniture) => {
    return axios.post('/api/custom-furniture', furniture);
  },
};

export default CustomFurnitureApi;