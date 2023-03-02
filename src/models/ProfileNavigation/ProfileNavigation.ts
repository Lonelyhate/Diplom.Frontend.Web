import NavigationApp from "../Navigation/NavigationApp";
import { CiSearch, CiShoppingCart, CiUser, CiStar } from "react-icons/ci";
import { IconType } from "react-icons";

export type ProfileElementType = {
  name: string | null | undefined;
  url: string | null | undefined;
  img: IconType;
};

class ProfileNavigation extends NavigationApp {
  readonly Favorites: ProfileElementType = {
    name: null,
    url: this.Urls.Favorites,
    img: CiStar
  };

  readonly Search: ProfileElementType = {
    name: null,
    url: null,
    img: CiSearch
  };

  readonly Cart: ProfileElementType = {
    name: null,
    url: null,
    img: CiShoppingCart
  };

  readonly Profile: ProfileElementType = {
    name: null,
    url: null,
    img: CiUser
  };

  readonly ProfileArray: ProfileElementType[] = [
    this.Favorites,
    this.Search,
    this.Cart,
    this.Profile
  ];
}

export default new ProfileNavigation();
