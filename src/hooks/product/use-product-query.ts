import { getProducts } from "@/api/product-api";
import { useQuery } from "@tanstack/react-query";

export const useProductQuery = () => {
    return useQuery({
        queryKey: ["product"],
        queryFn: getProducts,
    });
};
        