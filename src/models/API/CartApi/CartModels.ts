export interface IProductCart {
    name: string
}

export interface ICart {
    userId: number,
    amount: number,
    products: IProductCart[]
}