import axios from "axios";
import ApiType from "../ApiType";
import BaseAPI from "../BaseAPI";
import { IProductCreateRequestModel } from "./ProductCreateRequestModel";
import converter from "javascript-binary-converter";
import { IBaseResponse } from "../BaseResponse";
import { IProduct } from "../../Product/Product";
import { IAxiosError } from "../../AxiosError";

class ProductApi extends BaseAPI {
  BaseUrl = "https://localhost:7081/api/Product/";

  public async GetAllProduct(orderBy: string | "desc" = "", take: string = "") {
    let url = "getall"
    if (orderBy || take)
    {
      url = url + "?"
      if (orderBy === "desc")
      {
        url = url + "&orderBy=" + orderBy
      }
      if (take)
      {
        url += "&take=" + take
      }
    }

    return await this.SendAsync<IProduct[]>({
      ApiType: ApiType.GET,
      Url: url,
    });
  }

  public async CreateProductForm(request: IProductCreateRequestModel) {
    const formData = new FormData();
    formData.append("Name", request.name);
    formData.append("BrandId", request.brandId.toString());
    formData.append("CategoryId", request.categoryId.toString());
    formData.append("Sizes", request.sizes);
    formData.append("Price", request.price);
    formData.append("CodeProduct", request.codeProduct);
    formData.append("Description", request.description);
    request.images.forEach((img) => {
      formData.append("Images", img);
    });

    try {
      const response = await axios.post(this.BaseUrl + "create", formData);
      return response.data as IBaseResponse<IProduct>;
    } catch (e) {
      return (e as IAxiosError<IProduct>).response.data;
    }
  }
}

export default new ProductApi();
