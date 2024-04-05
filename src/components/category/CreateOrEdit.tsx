import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
        <Button>Crear Programa</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Creando Programa</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4">
          <FormCreateOrEdit />
        </div>
        {/* <DialogFooter>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}


