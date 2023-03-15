import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';
import { ICart, IProductCart } from './CartModels';

class CartAPI extends BaseAPI {
    BaseUrl = 'http://localhost:5001/api/cart/';

    public async GetCart() {
        return await this.SendAsync<ICart>({
            ApiType: ApiType.GET,
            Url: '',
            AccessToken: localStorage.getItem('token')
        });
    }

    public async AddPRoductToCart(product: IProductCart) {
        return await this.SendAsync<ICart>({
            ApiType: ApiType.POST,
            Url: "add",
            AccessToken: localStorage.getItem("token"),
            Data: product
        })
    }
}

export default new CartAPI();
