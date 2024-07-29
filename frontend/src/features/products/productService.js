import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";
const getProducts = async (userData) => {
  const response = await axios.get(`${base_url}product/`, userData);
  if (response.data) {
    return response.data;
  }
  
};
const addToWishlist = async (prodId) => {
  const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
  if (response.data) {
    return response.data;
  }
};


const productService = {
  getProducts,
  addToWishlist
 
};

export default productService;
