import axios from "axios";
import { base_url } from "../../utils/baseUrl";
const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    return response.data;
  }
  
};
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    return response.data;
  }
  
};


const authService = {
  register,
  login
 
};

export default authService;
