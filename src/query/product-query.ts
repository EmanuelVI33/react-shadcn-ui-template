import { createProduct, getProducts, updateProduct } from "@/api/product-api";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

// Peticcion Get
export const useProductQuery = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });
};
  
export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
};

export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
};

// export const useUpdateProgramMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: updateProgram,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["program"] });
//     },
//   });
// };

// export const useDeleteProgramMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: deleteProgram,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["program"] });
//     },
//   });
// };


