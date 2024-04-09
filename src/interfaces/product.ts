import { CategoryUpdate } from "./category";

interface ProductBase {
    name: string;
    description?: string;
    salePrice: number | string;
    purchasePrice?: number | string;
    stock: number | string;
}

export interface ProductCreate extends ProductBase {
    categoryId: number | string;
}

export interface ProductUpdate extends ProductCreate {
    id: number;
}

export interface Product extends ProductBase {
    id: number,
    category: CategoryUpdate;
}


