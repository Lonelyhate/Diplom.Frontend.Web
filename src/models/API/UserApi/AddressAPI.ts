import { IAddress } from '../../Models/User/Address';
import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';

class AddressAPI extends BaseAPI {
    BaseUrl = 'https://localhost:7175/api/Address/';

    public async AddressesGet() {
        return await this.SendAsync<IAddress[]>({
            ApiType: ApiType.GET,
            Url: '',
            AccessToken: localStorage.getItem('token')
        });
    }

    public async AddressAdd(value: string) {
        return await this.SendAsync<IAddress>({
            ApiType: ApiType.POST,
            Url: '',
            AccessToken: localStorage.getItem('token'),
            Data: {
                address: value
            }
        });
    }

    public async Update(id: number, address: string) {
        return await this.SendAsync<IAddress>({
            ApiType: ApiType.PUT,
            Url: '',
            AccessToken: localStorage.getItem('token'),
            Data: {
                id,
                address
            }
        });
    }

    public async Delete(id: number) {
        return await this.SendAsync<boolean>({
            ApiType: ApiType.DELETE,
            Url: '' + id,
            AccessToken: localStorage.getItem('token')
        });
    }

    public async SetActive(id: number) {
        return await this.SendAsync<IAddress>({
            ApiType: ApiType.GET,
            Url: "active/" + id,
            AccessToken: localStorage.getItem('token')
        })
    }
}

export default new AddressAPI();
