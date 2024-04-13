import { useProductContext } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";
import { useProductMutation } from "./use-product-mutation";
import { useCategory } from '../category/use-category';
import { useEffect } from "react";
import { toast } from "sonner";

export const useProduct = () => {
    const { 
        updateState, 
        handleSaveModal, 
        product: productContext, 
        handleCloseModal, 
    } = useProductContext();
    const { 
        mutateProduct, 
        isError, 
        error, 
        isSuccess 
    } = useProductMutation();
    const { categories } = useCategory();

    useEffect(() => {
      if (isSuccess) {
        toast.success("Producto Creado exitosamente");
        handleSaveModal();
      }
    }, [isSuccess, handleSaveModal]);
  
    useEffect(() => {
      if (isError) {
        console.log(error);
        const messages = error?.response?.data?.message;
        
        Array.isArray(messages)
        ? (messages.forEach((errorMessage: string)=> {
            toast.error(errorMessage);
          }))
        : toast.error(error?.message ?? 'Error en el servidor'); // Mostrar error de la respuesta
      }
    }, [isError, error]);

    const updateProductState = (product: Product) => {
        updateState(product);
    }

    return {
      productContext,
      updateProductState,
      handleSaveModal,
      handleCloseModal,
      mutateProduct,
      categories,  
    }
}