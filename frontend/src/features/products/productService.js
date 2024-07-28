import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getProducts = async (userData) => {
  const response = await axios.get(`${base_url}product/`, userData);
  if (response.data) {
    return response.data;
  }
  
};
const addToWishlit = async (userData) => {
  const response = await axios.get(`${base_url}wish/`, userData);
  if (response.data) {
    return response.data;
  }
  
};


const productService = {
  getProducts
 
};

export default productService;
