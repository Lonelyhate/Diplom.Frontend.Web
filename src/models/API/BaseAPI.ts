import ApiRequest from "./ApiRequest";
import ApiType from "./ApiType";
import axios from "axios";
import {IBaseResponse} from "./BaseResponse";
import {IAxiosError} from "../AxiosError";

class BaseAPI {

    protected BaseUrl: string = "";

    async SendAsync<T>(apiRequest: ApiRequest<any>) {
        let response = null;
        try
        {
            const options: IOptionsRequest<T> = {
                url: this.BaseUrl + apiRequest.Url,
                method: "GET"
            }

            if (apiRequest.Data !== null)
            {
                options.data = apiRequest.Data
            }

            if (apiRequest.AccessToken !== "" && apiRequest.AccessToken !== null)
            {
                options.headers = {'Accept': 'application/json', "Authorization": `Bearer ${apiRequest.AccessToken}`}
            }
            else {
                options.headers = {'Accept': 'application/json'}
            }

            switch (apiRequest.ApiType) {
                case ApiType.POST:
                    options.method = "POST"
                    break;
                case ApiType.PUT:
                    options.method = "PUT"
                    break;
                case ApiType.DELETE:
                    options.method = "DELETE"
                    break;
                default:
                    break;
            }

            response = await axios(options);
            return response.data as IBaseResponse<T>;
        } catch (e) {
            return (e as IAxiosError<T>).response.data;
        }

    }
}

interface IOptionsRequest<T> {
    method: string
    headers?: {}
    data?: T
    url: string
}

export default BaseAPI;