import NavigationApp from "../Navigation/NavigationApp";
import NavigationItemType from "../Navigation/NavigationItemType";
import {AiFillShop} from "react-icons/ai"
import {BiNews} from "react-icons/bi";

class AdminNavigation extends NavigationApp {
  readonly Product: NavigationItemType = {
    name: this.Names.AdminProduct,
    url: this.Urls.AdminProduct,
    icon: AiFillShop
  };

  readonly Blog: NavigationItemType = {
    name: this.Names.AdminBlog,
    url: this.Urls.AdminBlog,
    icon: BiNews
  }


  readonly NavigationArray: NavigationItemType[] = [this.Product, this.Blog];
}

export default new AdminNavigation();
