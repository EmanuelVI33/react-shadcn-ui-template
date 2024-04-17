import { Product } from "@/interfaces/product";
import { createContext, ReactNode, useReducer, useState } from "react";
import { OrderDetail } from '../interfaces/order';

export enum OrderActionTypes {
    TOGLE_MODAL = 'TOGLE_MODAL',
}

type State = {
    open: boolean;
};
  
type Action =
    | { type: OrderActionTypes.TOGLE_MODAL;  }

const initialState: State = {
    open: false,
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case OrderActionTypes.TOGLE_MODAL:
            return { ...state, open: !state.open };
        default:
            return state;
    }
};

interface OrderContextType {
    open: boolean;
    orderDetail: Array<OrderDetail>;
    handleTogleModal: () => void;
    handleAddProduct: (product: Product, amount: number) => void;
    handleClear: () => void;
    handleSaveOrder: () => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);
  
type OrderProviderProp =  {
    children: ReactNode;
}

export const OrderProvider = ({ children }: OrderProviderProp) => {
    const [orderDetail, setOrderDetail] = useState<Array<OrderDetail>>([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { open } = state;

    const handleTogleModal = () => {
        dispatch({type: OrderActionTypes.TOGLE_MODAL});
    }

    const handleAddProduct = (product: Product, amount: number) => {
        console.log(product, amount);
        const { salePrice } = product;
        const subTotal = Number(salePrice) * amount;
 
        const detail: OrderDetail = { 
            product: product, 
            unitPrice: Number(salePrice), 
            amount, 
            subTotal,
        };

        setOrderDetail(orderDetail => [ ...orderDetail, detail ]);
    }

    const handleClear = () => {
        setOrderDetail([]);
    }
    
    const handleSaveOrder = () => {
        console.log(orderDetail);
        handleClear();
    }

    return <OrderContext.Provider value={{ 
       open,
       orderDetail,
       handleTogleModal,
       handleAddProduct,
       handleClear,
       handleSaveOrder,
    }}>
        {children}
    </OrderContext.Provider>;
};
  