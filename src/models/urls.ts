
export const HOME_URL = "/";
export const ADMIN_URL = HOME_URL + "admin"
export const MAN_URL = HOME_URL + "man"
export const WOMAN_URL = HOME_URL + "woman"
export const BRANDS_URL = HOME_URL + "brands"
export const FAVORITES_URL = HOME_URL + "favorites"
export const ACCOUNT_URL = HOME_URL + "account"
export const ORDERS_URL = ACCOUNT_URL + "/orders"
export const DISCOUNT_URL = ACCOUNT_URL + "/discount"
export const ADMIN_PRODUCT_URL = ADMIN_URL + "/product"
export const ADMIN_BLOG_URL = ADMIN_URL + "/blog"

export class Urls {
    readonly Home: string = HOME_URL;
    readonly Man: string = MAN_URL;
    readonly Woman: string = WOMAN_URL;
    readonly Brands: string = BRANDS_URL;
    readonly Favorites: string = FAVORITES_URL;
    readonly Account: string = ACCOUNT_URL;
    readonly Orders: string = ORDERS_URL;
    readonly Discount: string = DISCOUNT_URL;
    readonly Admin: string = ADMIN_URL;
    readonly AdminProduct: string = ADMIN_PRODUCT_URL;
    readonly AdminBlog: string = ADMIN_BLOG_URL;
}