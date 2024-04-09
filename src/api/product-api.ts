import { axiosClient } from "@/constant/axiosClient";
import { Product, ProductCreate, ProductUpdate } from "@/interfaces/product";

export const createProduct = async (product: ProductCreate) : Promise<Product> => {
  return await axiosClient.post("/product", product);
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

export const updateProduct = async (product: ProductUpdate) : Promise<Product> => {
  return await axiosClient.patch(`/product/${product.id}`, product);
};