import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useProduct } from "@/hooks/product/use-product";
import { useCategory } from "@/hooks/category/use-category";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductMutation } from "@/hooks/product/use-product-mutation";
import { useEffect } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
  salePrice: z.string(),
  purchasePrice: z.string(),
  stock: z.string(),
  categoryId: z.string(),
});

function FormCreateOrEdit() {
    const { productContext, handleSaveModal, handleCloseModal } = useProduct();
    const { mutateProduct, isError, error, isSuccess } = useProductMutation();
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
        : toast.error(error?.message ?? 'Error en el servidor');
      }
    }, [isError, error]);

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: productContext?.name ?? '',
        description: productContext?.description ?? '',
        salePrice: productContext?.salePrice.toString() ?? '',
        purchasePrice: productContext?.purchasePrice?.toString() ?? '',
        stock: productContext?.stock.toString() ?? '',
        categoryId: productContext?.category?.id.toString() ?? '',
      },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        if (productContext) {
          mutateProduct({id: productContext?.id , ...values});
        } else {
          mutateProduct(values);
        }
      } catch (error) {
        console.log(error); 
      }
    }

    return (
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="descripción" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salePrice"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Precio de venta</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="precio de venta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purchasePrice"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Precio de compra</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="precio de compra" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="cantidad disponible " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="mb-3">
                  <FormLabel>Categoría</FormLabel>
                  <Select onValueChange={field.onChange} >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="selecciona una categoría" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {categories && categories.map(category => (
                        <SelectItem value={category.id.toString()} key={category.id}>
                          {category.name}
                        </SelectItem>
                      ))
                    }
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between gap-5 mt-5">
              <Button type="button" className="w-1/4" variant="destructive" onClick={() => handleCloseModal()}>Cancelar</Button>
              <Button type="submit" className="w-1/2">Crear</Button>
            </div>
          </form>
        </Form>
      </>);
  }

  export default FormCreateOrEdit;
