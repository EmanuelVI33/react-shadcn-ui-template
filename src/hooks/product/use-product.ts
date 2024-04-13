import { useProductContext } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";
// import { useProductMutation } from "./use-product-mutation";
// import { useCreateProductMutation, useProductQuery, useUpdateProductMutation } from "@/query/product-query"

export const useProduct = () => {
    // const { 
    //     mutate: createProduct, 
    //     error: errorCreate, 
    //     isError: isErrorCreate, 
    //     isSuccess: isSuccessCreate  
    // } = useCreateProductMutation();
    // const { 
    //     mutate: updateProduct, 
    //     error: errorUpdate, 
    //     isError: isErrorUpdate, 
    //     isSuccess: isSuccessUpdate, 
    // } = useUpdateProductMutation();

    // 
    const { 
        updateState, 
        handleSaveModal, 
        product: productContext, 
        handleCloseModal 
    } = useProductContext();

    const updateProductState = (product: Product) => {
        updateState(product);
    }

    return {
        updateProductState,
        handleSaveModal,
        handleCloseModal,
        productContext,
    }
}