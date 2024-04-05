import { axiosClient } from "@/constant/axiosClient";
import { Category } from "@/interfaces/category";

export const createCategory = async (category: Category) : Promise<Category> => {
    try {
      const response = await axiosClient.post("/category", category);
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