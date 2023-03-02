import {IBaseResponse} from "./API/BaseResponse";

export interface IAxiosError<T> {
    response: {
        data: IBaseResponse<T>
    }
}