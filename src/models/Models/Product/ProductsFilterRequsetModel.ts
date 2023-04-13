export interface IProductsFilterRequestModel {
    minPrice?: number,
    maxPrice?: number,
    gender?: string,
    category?: string,
    sizes?: string,
    brands?: string,
    sort?: string
}