import { Brand } from "./Brand";
import { Category } from "./Category";

export interface IProduct {
    id: number,
    name: string,
    price: number,
    sizes: string,
    gender: number,
    images: string,
    description: string,
    dateCreation: string,
    categoryid: number,
    codeProduct: number,
    category: Category,
    brandid: number,
    brand: Brand,
}