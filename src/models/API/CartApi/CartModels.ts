export interface IProductCart {
    id: number;
    name: string;
    price: number;
    size: string;
    gender: number;
    description: string;
    codeProduct: number;
    images: string;
    category: string;
    brand: string
    count?: number
}

export interface ICart {
    _id: string
    userId: number;
    amount: number;
    countProducts: number;
    products: IProductCart[];
}
