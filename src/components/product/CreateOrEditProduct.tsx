import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormCreateOrEdit from "./FormCreateOrEdit";
import { useProductContext } from "@/context/ProductContext";

// interface CreateOrEditProductProp{
//   product?: Product
// }

export function CreateOrEditProduct() {
  const { product, open, handleToogleModal, handleSaveModal } = useProductContext();
  // const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={handleToogleModal}>
      <DialogTrigger asChild>
        <Button>Crear producto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{product ? 'Editar producto' : 'Creando producto'}</DialogTitle>
        </DialogHeader>
        <FormCreateOrEdit/>
      </DialogContent>
    </Dialog>
  )
}


