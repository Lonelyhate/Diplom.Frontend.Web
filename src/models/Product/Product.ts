import { Brand } from "./Brand";
import { Category } from "./Category";

export interface IProduct {
    id: number,
    name: string,
    price: number,
    sizes: string,
    images: string,
    dateCreation: string,
    categoryid: number,
    category: Category
    brandid: number,
    brand: Brand,
}