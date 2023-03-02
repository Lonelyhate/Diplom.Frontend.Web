import { Urls } from "../urls";
import { NavigationName } from "./NavigationName";

class NavigationApp {
  readonly Names: NavigationName = new NavigationName();

  readonly Urls: Urls = new Urls();
}

export default NavigationApp;
