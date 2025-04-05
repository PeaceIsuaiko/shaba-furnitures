
import axios from 'axios';

const searchExternalProducts = async (query, searchType) => {
  try {
    const response = await axios.get(`https://api.example.com/products?${searchType}=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { searchExternalProducts };