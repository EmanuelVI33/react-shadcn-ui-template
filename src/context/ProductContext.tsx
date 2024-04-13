import { Product } from "@/interfaces/product";
import { createContext, ReactNode, useContext, useState } from "react";

                
interface AppContextType {
    product: Product | null;
    open: boolean;
    updateState: (newState: Product) => void;
    handleToogleModal: (value: boolean) => void;
    handleSaveModal: () => void;
    handleCloseModal: () => void;
}
  
  // Creamos el contexto
const ProductContext = createContext<AppContextType | undefined>(undefined);
  
  // Hook personalizado para utilizar el contexto
export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useAppContext debe ser utilizado dentro de un proveedor AppContext');
    }
    return context;
};
  
type ProductProviderProp =  {
    children: ReactNode;
}

export const ProductProvider = ({ children } : ProductProviderProp) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [open, setOpen] = useState(false);

    const handleToogleModal = () => {
        setOpen(open => !open); 
        if (product)
            setProduct(null);
    };

    const handleSaveModal = () => {
        setOpen(false);         // Cerrar modal
        setProduct(null);       // Establecer en undefined
    }

    const handleCloseModal = () => {
        setProduct(null);
        setOpen(false);
    }

    // Función para actualizar el estado
    const updateState = (newState: Product) => {
        setProduct(newState);
        handleToogleModal();
    };

    const contextValue: AppContextType = {
        product,
        open,
        updateState,
        handleSaveModal,
        handleToogleModal,
        handleCloseModal,
    };

    return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};