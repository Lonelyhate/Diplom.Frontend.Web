import { IProduct } from '../../Models/Product/Product';
import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';

class FavoritesApi extends BaseAPI {
    BaseUrl = 'https://localhost:7081/api/Favorites/';

    public async GetAllFavorites() {
        return await this.SendAsync<IProduct[]>({
            ApiType: ApiType.GET,
            Url: '',
            AccessToken: localStorage.getItem('token')
        });
    }

    public async AddToFavorites(id: number) {
        return await this.SendAsync<IProduct>({
            ApiType: ApiType.POST,
            Url: 'add',
            Data: {
                productId: id
            },
            AccessToken: localStorage.getItem('token')
        });
    }

    public async DeleteFromFavorites(id: number) {
        return await this.SendAsync<boolean>({
            ApiType: ApiType.DELETE,
            Url: id.toString(),
            AccessToken: localStorage.getItem('token')
        });
    }

    public async CheckFavorites(id: number) {
        return await this.SendAsync<boolean>({
            ApiType: ApiType.GET,
            Url: id.toString(),
            AccessToken: localStorage.getItem('token')
        });
    }
}

export default new FavoritesApi();
