import { useProductContext } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";
import { useProductQuery } from "@/query/product-query"

export const useProduct = () => {
    const { data: products = [], isLoading, isError } = useProductQuery();
    const { 
        updateState, 
        handleSaveModal, 
        product: productContext, 
        handleCloseModal 
    } = useProductContext();

    const updateProduct = (product: Product) => {
        updateState(product);
    }

    return {
        updateProduct,
        handleSaveModal,
        handleCloseModal,
        products, 
        productContext,
        isLoading, 
        isError,
    }
}