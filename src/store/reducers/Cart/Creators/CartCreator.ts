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
            response = await CartApi.AddPRoductToCart(product);
            console.log(response);
            if (!response.isSuccess) {
                dispatch(cartSlice.actions.cartError(response.displayMessage!));
                return;
            }
            dispatch(cartSlice.actions.cartAddProduct(response.data!));
        } catch (e) {
            dispatch(cartSlice.actions.cartError('Cart added product error'));
        }
    };
