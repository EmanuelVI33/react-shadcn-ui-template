import { axiosClient } from "@/constant/axiosClient";

export const createCategory = async (formData: FormData) => {
    try {
      const response = await axiosClient.post("/category", formData);
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  };
  
  export const getCategories = async () => {
    try {
      const response = await axiosClient.get("/category");
      return response.data;
    } catch (error) {
      console.error("Error getting programs:", error);
      throw error;
    }
  };