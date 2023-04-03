import { IProductCart } from './CartModels';

export interface IOrderModel {
    _id?: string;
    firstname: string;
    lastname: string;
    address: string;
    deliveryType: string;
    comment?: string;
    paymentType: string;
    amount: number;
    numberPhone: string;
    date: string | Date;
    cartProduct: IProductCart[];
    status?: string
}
