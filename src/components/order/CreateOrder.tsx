import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormCreate from "./FormCreate";
import { useOrderCreate } from "@/hooks/order/use-order-create";
import TableOrderDetail from "./TableDetail";


export function CreateOrder() {
  const { open, handleTogleModal, handleSave } = useOrderCreate();

  return (
    <Dialog open={open} onOpenChange={handleTogleModal}>
      <DialogTrigger asChild>
        <Button>Registrar pedidos</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Registrar pedido</DialogTitle>
        </DialogHeader>
        <FormCreate/>
        <TableOrderDetail />
        <DialogFooter>
          <Button onClick={()=> handleSave()}>Registrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


