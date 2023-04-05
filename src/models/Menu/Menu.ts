import NavigationApp from "../Navigation/NavigationApp";

class Menu extends NavigationApp {
  readonly ManuArray = [
    {
      name: this.Names.News,
      url: this.Urls.News
    },
    {
      name: this.Names.BRANDS,
      url: this.Urls.Brands
    },
    {
      name: this.Names.MAN,
      url: this.Urls.Man
    },
    {
      name: this.Names.WOMAN,
      url: this.Urls.Woman
    },
    {
      name: this.Names.Accessories,
      url: this.Urls.Accessories
    }
  ];
}

export default new Menu();
