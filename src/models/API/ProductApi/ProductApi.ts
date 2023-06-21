import axios from 'axios';
import ApiType from '../ApiType';
import BaseAPI from '../BaseAPI';
import { IProductCreateRequestModel } from '../../Models/Product/ProductCreateRequestModel';
import { IBaseResponse } from '../BaseResponse';
import { IProduct, IProductGetAllResponseModel } from '../../Models/Product/Product';
import { IAxiosError } from '../../AxiosError';

class ProductApi extends BaseAPI {
    BaseUrl = 'https://localhost:7081/api/Product/';

    public async GetAllProduct(
        orderBy: string | 'desc' = '',
        take: string = '',
        newProducts: boolean = false,
        sort?: string,
        minPrice?: number,
        maxPrice?: number,
        gender?: string,
        category?: string,
        sizes?: string,
        brands?: string,
        search?: string
    ) {
        let url = 'getall';
        if (orderBy || take || newProducts || sort) {
            url = url + '?';
            if (orderBy === 'desc') {
                url = url + '&orderBy=' + orderBy;
            }
            if (take) {
                url += '&take=' + take;
            }
            if (newProducts) {
                url += '&newProducts=' + newProducts;
            }
            if (sort) {
                url += '&sort=' + sort;
            }
            if (minPrice) {
                url += '&priceMin=' + minPrice;
            }
            if (maxPrice) {
                url += '&priceMax=' + maxPrice;
            }
            if (gender) {
                url += '&gender=' + gender;
            }
            if (category) {
                url += '&category=' + category;
            }
            if (sizes) {
                url += '&sizes=' + sizes;
            }
            if (brands) {
                url += '&brands=' + brands;
            }
            if (search) {
                url += '&search=' + search;
            }
        }

        return await this.SendAsync<IProductGetAllResponseModel>({
            ApiType: ApiType.GET,
            Url: url
        });
    }

    public async CreateProductForm(request: IProductCreateRequestModel) {
        const formData = new FormData();
        formData.append('Name', request.name);
        formData.append('BrandId', request.brandId.toString());
        formData.append('CategoryId', request.categoryId.toString());
        formData.append('Sizes', request.sizes);
        formData.append('Price', request.price);
        formData.append('CodeProduct', request.codeProduct);
        formData.append('Description', request.description);
        formData.append('Gender', request.gender.toString());
        request.images.forEach(img => {
            formData.append('Images', img);
        });

        try {
            const response = await axios.post(this.BaseUrl + 'create', formData);
            return response.data as IBaseResponse<IProduct>;
        } catch (e) {
            return (e as IAxiosError<IProduct>).response.data;
        }
    }

    public async GetProductById(id: string) {
        return await this.SendAsync<IProduct>({
            ApiType: ApiType.GET,
            Url: `get/${id}`
        });
    }
}

export default new ProductApi();
