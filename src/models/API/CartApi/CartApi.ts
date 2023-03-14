import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';
import { ICart } from './CartModels';

class CartAPI extends BaseAPI {
    BaseUrl = 'http://localhost:5001/api/cart/';

    public async GetCart() {
        return await this.SendAsync<ICart>({
            ApiType: ApiType.GET,
            Url: '',
            AccessToken: localStorage.getItem('token')
        });
    }
}

export default new CartAPI();
