import axios from "axios";
import { base_url } from "../../utils/baseUrl";  
const uploadService = {
  uploadImg: async (formData) => {
    try {
      const response = await axios.post(`${base_url}upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  deleteImg: async (id) => {
    try {
      const response = await axios.delete(`${base_url}delete-img/${id}/`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default uploadService;