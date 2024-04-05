import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormCreateOrEdit from "./FormCreateOrEdit";


export function CreateOrEditCategory() {
  // const program = await getPrograms();
  // console.log(program);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Crear categoría</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Creando categoría</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <FormCreateOrEdit />
        </div>
      </DialogContent>
    </Dialog>
  )
}


