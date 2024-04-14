import { useProductContext } from "./use-product-context";
import { useProductQuery } from "./use-product-react-query";

export const useTableProduct = () => {
    const { handleSetProduct, handleOpenModalDelete } = useProductContext();
    const { data: products = [], isLoading, isError } = useProductQuery();

    return {
        handleSetProduct, 
        handleOpenModalDelete,
        products,
        isLoading,
        isError,
    }
}