import DiscountAPI from '../../../../models/API/UserApi/DiscountAPI';
import { AppDispatch } from '../../../store';
import { discountSlice } from '../slices/DiscountSlice';

export const fetchDiscountCreate = () => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(discountSlice.actions.discountLoading);
        response = await DiscountAPI.Create();
        if (!response.isSuccess) {
            dispatch(
                discountSlice.actions.discountError(response.displayMessage!)
            );
            return;
        }
        dispatch(discountSlice.actions.discountCreate(response.data!));
    } catch (e) {
        dispatch(discountSlice.actions.discountError('Error address'));
    }
};

export const fetchDiscountUpdate = (amount: number) => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(discountSlice.actions.discountLoading);
        response = await DiscountAPI.Update(amount);
        if (!response.isSuccess) {
            dispatch(
                discountSlice.actions.discountError(response.displayMessage!)
            );
            return;
        }
        dispatch(discountSlice.actions.discountUpdate(response.data!));
    } catch (e) {
        dispatch(discountSlice.actions.discountError('Error address'));
    }
};

export const fetchDiscountGetById = () => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(discountSlice.actions.discountLoading);
        response = await DiscountAPI.GetById();
        if (!response.isSuccess) {
            dispatch(
                discountSlice.actions.discountError(response.displayMessage!)
            );
            return;
        }
        dispatch(discountSlice.actions.discountGetById(response.data!));
    } catch (e) {
        dispatch(discountSlice.actions.discountError('Error address'));
    }
};

export const fetchDiscountDelete = () => (dispatch: AppDispatch) => {
    dispatch(discountSlice.actions.discountDelete())
}
