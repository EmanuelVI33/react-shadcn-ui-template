import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormCreateOrEdit from "./FormCreateOrEdit";
import { useState } from "react";


export function CreateOrEditProduct() {
  const [open, setOpen] = useState(false);

  const handleSaveSuccess = () => {
    // Lógica para manejar el éxito al guardar
    setOpen(false); // Cierra el modal
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Crear producto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Creando producto</DialogTitle>
        </DialogHeader>
        <FormCreateOrEdit handleSaveSuccess={handleSaveSuccess} />
      </DialogContent>
    </Dialog>
  )
}


