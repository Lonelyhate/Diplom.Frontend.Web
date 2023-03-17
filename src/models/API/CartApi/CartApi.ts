import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';
import { ICart, IProductCart } from '../../Models/Cart/CartModels';

class CartAPI extends BaseAPI {
    BaseUrl = 'http://localhost:5001/api/cart/';

    public async GetCart() {
        return await this.SendAsync<ICart>({
            ApiType: ApiType.GET,
            Url: '',
            AccessToken: localStorage.getItem('token')
        });
    }

    public async AddProductToCart(product: IProductCart) {
        return await this.SendAsync<ICart>({
            ApiType: ApiType.POST,
            Url: 'add',
            AccessToken: localStorage.getItem('token'),
            Data: product
        });
    }

    public async DeleteAllProduct() {
        return await this.SendAsync<ICart>({
            ApiType: ApiType.DELETE,
            Url: '',
            AccessToken: localStorage.getItem('token')
        });
    }

    public async PlusProduct(productid: number, size: number) {
        return await this.SendAsync<ICart>({
            ApiType: ApiType.POST,
            Url: 'plus',
            AccessToken: localStorage.getItem('token'),
            Data: {
                productid,
                size
            }
        });
    }

    public async MinusProduct(productid: number, size: number) {
        return await this.SendAsync<ICart>({
            ApiType: ApiType.POST,
            Url: 'minus',
            AccessToken: localStorage.getItem('token'),
            Data: {
                productid,
                size
            }
        });
    }
}

export default new CartAPI();
