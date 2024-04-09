import { useCategoryQuery, useCreateCategoryMutation } from "@/query/category-query";

export const useCategory = () => {
    const { mutate: createCategory } = useCreateCategoryMutation();
    const { data: categories, isLoading, isError } = useCategoryQuery();

    return {
        createCategory,
        categories, 
        isLoading, 
        isError
    }
}