import { IDiscount } from '../../Models/User/Discount';
import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';

class DiscountAPI extends BaseAPI {
    BaseUrl = 'https://localhost:7175/api/Discount/';

    public async GetById() {
        return await this.SendAsync<IDiscount>({
            ApiType: ApiType.GET,
            Url: 'get',
            AccessToken: localStorage.getItem('token')
        });
    }

    public async Create() {
        return await this.SendAsync<IDiscount>({
            ApiType: ApiType.GET,
            Url: 'create',
            AccessToken: localStorage.getItem('token')
        });
    }

    public async Update(amount: number) {
        return await this.SendAsync<IDiscount>({
            ApiType: ApiType.PUT,
            Url: 'update',
            Data: { amount },
            AccessToken: localStorage.getItem('token')
        });
    }
}

export default new DiscountAPI();
