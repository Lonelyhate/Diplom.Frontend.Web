import { IOrderModel } from '../../Models/Cart/OrderModel';
import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';

class OrderApi extends BaseAPI {
    BaseUrl = 'http://localhost:5001/api/order/';

    public async MakeOrder(request: IOrderModel) {
        return await this.SendAsync<IOrderModel>({
            ApiType: ApiType.POST,
            AccessToken: localStorage.getItem('token'),
            Url: '',
            Data: request
        });
    }

    public async GetAll() {
        return await this.SendAsync<IOrderModel[]>({
            ApiType: ApiType.GET,
            AccessToken: localStorage.getItem('token'),
            Url: ''
        });
    }
}

export default new OrderApi();
