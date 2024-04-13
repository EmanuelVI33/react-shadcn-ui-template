import { createProduct, updateProduct } from "@/api/product-api";
import { ProductMutate } from "@/interfaces/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useProductMutation = () => {
    const queryClient = useQueryClient();

    const createProductMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["product"] });
        },
    });

    const updateProductMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["product"] });
        },
    });

    const mutateProduct = (values: ProductMutate) => {
        if (values.id) {
            console.log(values);
            updateProductMutation.mutate(values);
        } else {
            createProductMutation.mutate(values);
        }
    };

    const isSuccess = createProductMutation.isSuccess || updateProductMutation.isSuccess;
    const isPeding = createProductMutation.isPending || updateProductMutation.isPending;
    const isError =createProductMutation.isError || updateProductMutation.isError;
    const error = createProductMutation.error || updateProductMutation.error;

    return { mutateProduct, createProductMutation, updateProductMutation, isError, error, isPeding, isSuccess };
};