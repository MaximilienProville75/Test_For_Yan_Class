import axios from 'axios';

const ApiUrl = 'https://fakestoreapi.com/products';

// Get all products
export const getAllProducts = async () => {
  const response = await axios.get(ApiUrl);
  return response.data;
};

// Get product by id
export const getProductById = async id => {
  const response = await axios.get(`${ApiUrl}/${id}`);
  return response.data;
};
