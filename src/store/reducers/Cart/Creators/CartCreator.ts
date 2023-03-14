import CartApi from "../../../../models/API/CartApi/CartApi";
import { AppDispatch } from "../../../store";
import { cartSlice } from "../Slices/CartSlice";

export const fetchCart = () => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(cartSlice.actions.cartLoading())
        response = await CartApi.GetCart();
        if (!response.isSuccess) {
            dispatch(cartSlice.actions.cartError(response.displayMessage!))
            return;
        }
        dispatch(cartSlice.actions.cartGet(response.data!))
    } catch(e) {
        dispatch(cartSlice.actions.cartError("Cart error"))
    }
}