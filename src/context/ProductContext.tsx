import { Product } from "@/interfaces/product";
import { createContext, ReactNode,  useState } from "react";
                
interface AppContextType {
    product: Product | null;
    open: boolean;
    handleOpenModal: (value: boolean) => void;
    handleSaveModal: () => void;
    handleOpenModalCreate: (product: Product | null) => void
    handleCloseModal: () => void;
}
  
export const ProductContext = createContext<AppContextType | undefined>(undefined);
  
type ProductProviderProp =  {
    children: ReactNode;
}

export const ProductProvider = ({ children } : ProductProviderProp) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(value => !value); 
        setProduct(null);
    };

    const handleSaveModal = () => {
        setOpenModal(false);         // Cerrar modal
        setProduct(null);       // Establecer en undefined
    }

    const handleCloseModal = () => {
        setProduct(null);
        setOpenModal(false);
    }

    const handleOpenModalCreate = (product: Product | null) => {
        setProduct(product);
        setOpenModal(true);
    }

    const contextValue: AppContextType = {
        product,
        open: openModal,
        handleSaveModal,
        handleOpenModalCreate,
        handleOpenModal,
        handleCloseModal,
    };

    return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};