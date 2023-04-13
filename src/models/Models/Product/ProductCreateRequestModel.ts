export interface IProductCreateRequestModel {
    name: string;
    brandId: number;
    categoryId: number;
    sizes: string;
    price: string;
    codeProduct: string;
    description: string;
    images: File[];
    gender: number;
}