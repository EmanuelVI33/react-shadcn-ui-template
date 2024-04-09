import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogClose } from "@radix-ui/react-dialog";
import { useProduct } from "@/hooks/use-product";
import { useCategory } from "@/hooks/use-category";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormCreateOrEditProps {
  handleSaveSuccess: () => void;
}

const formSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
  salePrice: z.string(),
  purchasePrice: z.string(),
  stock: z.string(),
  categoryId: z.string(),
  // salePrice: z.string().refine(salePrice => !isNaN(parseFloat(salePrice)), {
  //   message: "El precio de venta debe ser un número válido"
  // }),
  // purchasePrice: z.string().refine(purchasePrice => !isNaN(parseFloat(purchasePrice)), {
  //   message: "El precio de compra debe ser un número válido"
  // }),
  // stock: z.string().refine(stock => !isNaN(parseFloat(stock)), {
  //   message: "El stock debe ser un número válido"
  // }),
  // categoryId: z.string().refine(categoryId => !isNaN(parseFloat(categoryId)), {
  //   message: "Categoría selecionada no es un string válido"
  // }),
});

function FormCreateOrEdit({ handleSaveSuccess } : FormCreateOrEditProps) {
    const { createProduct } = useProduct();
    const { categories } = useCategory();

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        description: "",
        salePrice: "",
        purchasePrice: "",
        stock: "",
        categoryId: "",
      },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        console.log(values);
        const response = createProduct(values);
        handleSaveSuccess();
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
              <DialogClose className="w-1/4">
                  <Button className="">Cancelar</Button>
              </DialogClose>

              <Button type="submit" className="w-1/4">Crear</Button>
            </div>
          </form>
        </Form>
      </>);
}

export default FormCreateOrEdit
