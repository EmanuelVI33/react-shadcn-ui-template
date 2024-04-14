import { useProductQuery } from "@/hooks/product/use-product-query";
import { Product } from "@/interfaces/product";
import { useProductContext } from "./use-product-context";

export const useTableProduct = () => {
    const { handleOpenModalCreate } = useProductContext();
    const { data: products = [], isLoading, isError } = useProductQuery();

    return {
        handleOpenModalCreate, 
        products,
        isLoading,
        isError,
    }
}