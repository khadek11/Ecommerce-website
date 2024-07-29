// api.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com/api';

export const api = {
  getAllProducts: () => axios.get(`${API_URL}/products`),
  getProduct: (id) => axios.get(`${API_URL}/products/${id}`),
  createProduct: (productData) => axios.post(`${API_URL}/products/create`, productData),
  updateProduct: (id, productData) => axios.put(`${API_URL}/products/${id}`, productData),
  deleteProduct: (id) => axios.delete(`${API_URL}/products/${id}`),
};