import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrderFormCreate } from "@/hooks/order/use-order-form-create";

const formSchema = z.object({
  amount: z.string().min(1),
  productId: z.string(),
});

function FormCreateOrder() {
  const { products, handleAddProduct } = useOrderFormCreate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '1',
      productId: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const product = products?.find(p => p.id == values.productId);
    if (product) {
      handleAddProduct(product, Number(values.amount));
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="productId"
              render={({ field }) => (
                <FormItem className="mb-3 w-full">
                  <FormLabel>Producto</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="selecciona un producto" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent >
                    {products && products.map(product => (
                        <SelectItem value={product.id?.toString()} key={product.id}>
                          {`${product.name}`}
                        </SelectItem>
                      ))
                    }
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="mb-3 w-1/4">
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input  type="number" placeholder="cantidad" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end my-1">
            <Button type="submit" className="w-1/4">Agregar</Button>
          </div>
        </form>
      </Form>
    </>);
  }

  export default FormCreateOrder;


// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useOrderFormCreate } from "@/hooks/order/use-order-form-create";
// import { Input } from "../ui/input";
// import React, { useRef, useState } from "react";
// import { Button } from "../ui/button";
// import TableOrderDetail from "./TableDetail";
// import { Product } from "@/interfaces/product";

// function FormCreate() {
//   const { products, handleAddProduct } = useOrderFormCreate();
//   const [product, setProduct] = useState<Product | null>();
//   const amountRef = useRef();


//   return (
//     <>
//       <div className="my-2 flex justify-around gap-5">
//         <Select>
//           <SelectTrigger  className="w-full">
//             <SelectValue  placeholder="selecciona un producto" />
//           </SelectTrigger>
//           <SelectContent>
//           {products && products.map((product, index) => (
//               <SelectItem  value={product.id} key={product.id}>
//                 {`${product.name} - ${product.salePrice}`}
//               </SelectItem>
//             ))
//           }
//           </SelectContent>
//         </Select>  
//         <input ref={amountRef} defaultValue="0" className="w-1/4" />      
//         <Button onClick={() => handleAddProduct(productRef?.current?.value, amountRef?.current?.value)}>Add</Button>
//       </div>
//       <TableOrderDetail />
//     </>
//   );
// }

// export default FormCreate;
