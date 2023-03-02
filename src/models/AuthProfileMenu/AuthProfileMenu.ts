import NavigationApp from "../Navigation/NavigationApp";
import NavigationItemType from "../Navigation/NavigationItemType";

class AuthProfileMenu extends NavigationApp {
  readonly Orders: NavigationItemType = {
    name: this.Names.Orders,
    url: this.Urls.Orders
  };

  readonly Discount: NavigationItemType = {
    name: this.Names.Discount,
    url: this.Urls.Discount
  };

  readonly Favorites: NavigationItemType = {
    name: this.Names.Favorites,
    url: this.Urls.Favorites
  };

  readonly Admin: NavigationItemType = {
    name: this.Names.Admin,
    url: this.Urls.Admin
  };

  readonly NavigationArray: NavigationItemType[] = [
    this.Orders,
    this.Discount,
    this.Favorites
  ];
}

export default new AuthProfileMenu();
