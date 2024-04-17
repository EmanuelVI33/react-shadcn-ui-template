import { Product } from "./product";

export interface Order {
    nit: string | null;
    orderDetail: Array<OrderDetail>;
}

export interface OrderDetail {
    product: Product;
    amount: number;
    unitPrice: number;
    subTotal: number;
}