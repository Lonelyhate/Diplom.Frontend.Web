export const HOME_URL = '/';
export const FAVORITES_URL = HOME_URL + 'favorites';
export const LOYALTY_URL = HOME_URL + 'loyalty';
export const CONTACT_URL = HOME_URL + 'contact';
export const MAGAZINE_URL = HOME_URL + 'magazine';
export const BLOG_URL = HOME_URL + 'news';
export const PRODUCT_PAGE_URL = HOME_URL + 'product';
export const CHECKOUT_PAGE_URL = HOME_URL + "checkout";
export const PAYTURE_PAGE_URL = HOME_URL + "payment"
export const CATALOG_PAGE_URL = HOME_URL + "catalog"
export const ORDER_SUCCESS_URL = HOME_URL + "orders/success"

export const NEWS_PAGE_URL = CATALOG_PAGE_URL + "/news"
export const BRANDS_URL = CATALOG_PAGE_URL
export const MAN_URL = CATALOG_PAGE_URL + '/man';
export const WOMAN_URL = CATALOG_PAGE_URL + '/woman';
export const ACCESSORIES_PAGE_URL = CATALOG_PAGE_URL + "/accessories"
export const SEARCH_PAGE_URL = CATALOG_PAGE_URL + "/search"

export const FAQ_URL = HOME_URL + 'faq';
export const SHIPPING_FAQ_URL = FAQ_URL + '/shipping_faq';
export const EXCHANGE_FAQ_URL = FAQ_URL + '/exchange_faq';

export const ACCOUNT_URL = HOME_URL + 'account';
export const ORDERS_URL = ACCOUNT_URL + '/orders';
export const DISCOUNT_URL = ACCOUNT_URL + '/discount';
export const ADDRESS_URL = ACCOUNT_URL + '/address';

export const ADMIN_URL = HOME_URL + 'admin/product';
export const ADMIN_PRODUCT_URL = ADMIN_URL;
export const ADMIN_BLOG_URL = ADMIN_URL + '/blog';

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
    readonly Address: string = ADDRESS_URL;
    readonly Checkout: string = CHECKOUT_PAGE_URL;
    readonly Payture: string = PAYTURE_PAGE_URL;
    readonly OrdersSuccess: string = ORDER_SUCCESS_URL;
    readonly Catalog: string = CATALOG_PAGE_URL;
    readonly Accessories: string = ACCESSORIES_PAGE_URL;
    readonly News: string = NEWS_PAGE_URL;
}
