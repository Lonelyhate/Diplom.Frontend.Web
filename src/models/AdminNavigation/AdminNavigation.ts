import NavigationApp from "../Navigation/NavigationApp";
import NavigationItemType from "../Navigation/NavigationItemType";
import {AiFillShop} from "react-icons/ai"

class AdminNavigation extends NavigationApp {
  readonly Product: NavigationItemType = {
    name: this.Names.AdminProduct,
    url: this.Urls.AdminProduct,
    icon: AiFillShop
  };

  readonly NavigationArray: NavigationItemType[] = [this.Product];
}

export default new AdminNavigation();
