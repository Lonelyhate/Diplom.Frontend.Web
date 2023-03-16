import CartApi from '../../../../models/API/CartApi/CartApi';
import { IProductCart } from '../../../../models/API/CartApi/CartModels';
import { AppDispatch } from '../../../store';
import { cartSlice } from '../Slices/CartSlice';

export const fetchCart = () => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(cartSlice.actions.cartLoading());
        response = await CartApi.GetCart();
        if (!response.isSuccess) {
            dispatch(cartSlice.actions.cartError(response.displayMessage!));
            return;
        }
        dispatch(cartSlice.actions.cartGet(response.data!));
    } catch (e) {
        dispatch(cartSlice.actions.cartError('Cart error'));
    }
};

export const fetchCartAddProduct =
    (product: IProductCart) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(cartSlice.actions.cartLoading());
            response = await CartApi.AddProductToCart(product);
            if (!response.isSuccess) {
                dispatch(cartSlice.actions.cartError(response.displayMessage!));
                return;
            }
            dispatch(cartSlice.actions.cartAddProduct(response.data!));
        } catch (e) {
            dispatch(cartSlice.actions.cartError('Cart added product error'));
        }
    };

export const fetchDeleteAllProductsCart =
    () => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(cartSlice.actions.cartLoading());
            response = await CartApi.DeleteAllProduct();
            if (!response.isSuccess) {
                dispatch(cartSlice.actions.cartError(response.displayMessage!));
                return;
            }
            dispatch(cartSlice.actions.cartDeleteAllProduct(response.data!));
        } catch (e) {
            dispatch(cartSlice.actions.cartError('Cart added product error'));
        }
    };

export const fetchPlusProductCart =
    (productId: number, size: number) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(cartSlice.actions.cartLoadingPlus());
            response = await CartApi.PlusProduct(productId, size);
            if (!response.isSuccess) {
                dispatch(cartSlice.actions.cartError(response.displayMessage!));
                return;
            }
            dispatch(cartSlice.actions.cartPlusProduct(response.data!));
        } catch (e) {
            dispatch(cartSlice.actions.cartError('Cart added product error'));
        }
    };

export const fetchMinusProductCart =
    (productId: number, size: number) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(cartSlice.actions.cartLoadingMinus());
            response = await CartApi.MinusProduct(productId, size);
            if (!response.isSuccess) {
                dispatch(cartSlice.actions.cartError(response.displayMessage!));
                return;
            }
            dispatch(cartSlice.actions.cartMinusProduct(response.data!));
        } catch (e) {
            dispatch(cartSlice.actions.cartError('Cart added product error'));
        }
    };
