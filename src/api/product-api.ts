import { axiosClient } from "@/constant/axiosClient";
import { Product, ProductCreate } from "@/interfaces/product";

export const createProduct = async (product: ProductCreate) : Promise<Product> => {
  try {
    const response = await axiosClient.post("/product", product);
    return response.data;
  } catch (error) {
    console.error("Error creating Product:", error);
    throw error;
  }
};
  
export const getProducts = async (): Promise<Array<Product>> => {
  try {
    const response = await axiosClient.get("/product");
    return response.data;
  } catch (error) {
    console.error("Error getting programs:", error);
    throw error;
  }
};