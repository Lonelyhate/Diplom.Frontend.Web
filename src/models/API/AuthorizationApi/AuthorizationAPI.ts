import BaseAPI from "../BaseAPI";
import ApiType from "../ApiType";
import { IUser } from "../../User";

class AuthorizationAPI extends BaseAPI {
  BaseUrl = "https://localhost:7175/api/";

  public async UserChekByLogin(email: string) {
    return await this.SendAsync<boolean>({
      Url: `User/check?email=${email}`,
      ApiType: ApiType.GET
    });
  }

  public async UserLogin(login: string, password: string) {
    return await this.SendAsync<IUser>({
      Url: `User/login`,
      ApiType: ApiType.POST,
      Data: {
        email: login,
        password: password
      }
    });
  }

  public async UserRegistration(
    login: string,
    password: string,
    password_confrim: string
  ) {
    return await this.SendAsync<IUser>({
      Url: "User/registration",
      ApiType: ApiType.POST,
      Data: {
        email: login,
        password,
        password_confrim
      }
    });
  }

  public async UserAuth() {
    let token = localStorage.getItem("token");

    return await this.SendAsync<IUser>({
      Url: "User/auth",
      ApiType: ApiType.GET,
      AccessToken: token
    });
  }

  public async UserUpdate(user: IUser) {
    let token = localStorage.getItem("token");

    return await this.SendAsync<IUser>({
      Url: "User/update",
      ApiType: ApiType.PUT,
      AccessToken: token,
      Data: user
    });
  }
}

export default new AuthorizationAPI();
