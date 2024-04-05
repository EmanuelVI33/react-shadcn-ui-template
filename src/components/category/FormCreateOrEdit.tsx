import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useCategory } from "@/hooks/use-category";
import { Form } from "react-router-dom";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    name: z.string(),
    description: z.string(),
  });

function FormCreateOrEdit() {
    const { createCategory } = useCategory();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          description: "",
        },
      });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            const response = createCategory(values);
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
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="nombre del proyecto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="descripcion" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end w-full mt-5">
                  <Button type="submit" className="w-1/3">Crear</Button>
                </div>
              </form>
        </Form>
      </>);
}

export default FormCreateOrEdit
