import { Category } from '../../Models/Product/Category';
import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';

class CategoryApi extends BaseAPI {
    BaseUrl = 'https://localhost:7081/api/Category/';

    public async GetCategories() {
        return await this.SendAsync<Category[]>({
            ApiType: ApiType.GET,
            Url: 'getall'
        });
    }

    public async CreateCategory(name: string) {
        return await this.SendAsync<Category>({
            ApiType: ApiType.POST,
            Url: 'create',
            Data: {
                name: name
            }
        });
    }
}

export default new CategoryApi();
