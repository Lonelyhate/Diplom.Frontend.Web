import { Brand } from "../../Product/Brand";
import ApiType from "../ApiType";
import BaseAPI from "../BaseAPI";

class BrandApi extends BaseAPI {
  BaseUrl = "https://localhost:7081/api/Brand/";

  public async GetBrands() {
    return await this.SendAsync<Brand[]>({
      ApiType: ApiType.GET,
      Url: "getall"
    });
  }

  public async CreateBrand(name: string) {
    return await this.SendAsync<Brand>({
        ApiType: ApiType.POST,
        Url: "create",
        Data: {
            name: name
        }
    })
  }
}

export default new BrandApi();
