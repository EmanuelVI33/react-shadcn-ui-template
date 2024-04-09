import { useProductQuery, useCreateProductMutation } from "@/query/product-query"

export const useProduct = () => {
    const { mutate: createProduct } = useCreateProductMutation();
    const { data: products = [], isLoading, isError } = useProductQuery();

    return {
        createProduct,
        products, 
        isLoading, 
        isError
    }
}