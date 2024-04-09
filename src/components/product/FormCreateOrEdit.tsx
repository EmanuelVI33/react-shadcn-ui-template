import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useProduct } from "@/hooks/use-product";
import { useCategory } from "@/hooks/use-category";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateProductMutation } from "@/query/product-query";
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
    const { mutate: createProduct, error, isError, isSuccess } = useCreateProductMutation();
    const { categories } = useCategory();

    useEffect(() => {
      if (isSuccess) {
        toast.success("Producto Creado exitosamente");
        handleSaveModal();
      }
    }, [isSuccess, handleSaveModal]);
  
    useEffect(() => {
      if (isError) {
        // const message = error.response.data.message;
        const messages = error.response.data.message || {};
        console.log(messages);
        
        messages.forEach(errorMessage=> {
          toast.error(errorMessage);
        });
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

    async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        console.log(values);
        const response = createProduct(values);
        console.log(response);
      } catch (error) {
        console.log(error); 
      }
    }

    return (
      <>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=""
          >
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
                        {categories && categories.map(category => {
                          const { id, name } = category;

                          return (
                            <SelectItem value={id+''} key={id}>
                              {name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between mt-5">
              <Button type="button" className="" onClick={() => handleCloseModal()}>Cancelar</Button>
              <Button type="submit" className="w-1/4">Crear</Button>
            </div>
          </form>
        </Form>
      </>);
}

export default FormCreateOrEdit;
