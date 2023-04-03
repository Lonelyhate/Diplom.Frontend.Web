import OrderApi from '../../../../models/API/CartApi/OrderApi';
import { IOrderModel } from '../../../../models/Models/Cart/OrderModel';
import { AppDispatch } from '../../../store';
import { orderSlice } from '../Slices/OrderSlice';

export const fetchOrdersByUser = () => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(orderSlice.actions.orderLoading());
        response = await OrderApi.GetAll();
        if (!response.isSuccess) {
            dispatch(orderSlice.actions.orderError(response.displayMessage!));
            return;
        }
        dispatch(orderSlice.actions.orderGetAll(response.data!));
    } catch (e) {
        dispatch(orderSlice.actions.orderError('order error'));
    }
};

export const fetchMakeOrder = (order: IOrderModel) => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(orderSlice.actions.orderLoading());
        response = await OrderApi.MakeOrder(order);
        if (!response.isSuccess) {
            dispatch(orderSlice.actions.orderError(response.displayMessage!));
            return;
        }
        dispatch(orderSlice.actions.orderMake(response.data!));
    } catch (e) {
        dispatch(orderSlice.actions.orderError('order error'));
    }
};
