import AddressAPI from '../../../../models/API/UserApi/AddressAPI';
import { AppDispatch } from '../../../store';
import { addressSlice } from '../slices/AddressSlice';

export const fetchAddresses = () => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(addressSlice.actions.addressLoading());
        response = await AddressAPI.AddressesGet();
        if (!response.isSuccess) {
            dispatch(
                addressSlice.actions.addressError(response.displayMessage!)
            );
            return;
        }
        dispatch(addressSlice.actions.addressGetAll(response.data!));
    } catch (e) {
        dispatch(addressSlice.actions.addressError('Error address'));
    }
};

export const fetchAddressAdd =
    (value: string) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(addressSlice.actions.addressLoading());
            response = await AddressAPI.AddressAdd(value);
            if (!response.isSuccess) {
                dispatch(
                    addressSlice.actions.addressError(response.displayMessage!)
                );
                return;
            }
            dispatch(addressSlice.actions.addressAdd(response.data!));
        } catch (e) {
            dispatch(addressSlice.actions.addressError('Error address'));
        }
    };

export const fetchAddressUpdate =
    (id: number, address: string) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(addressSlice.actions.addressLoading());
            response = await AddressAPI.Update(id, address);
            if (!response.isSuccess) {
                dispatch(
                    addressSlice.actions.addressError(response.displayMessage!)
                );
                return;
            }
            dispatch(addressSlice.actions.addressUpdate(response.data!));
        } catch (e) {
            dispatch(addressSlice.actions.addressError('Error address'));
        }
    };

export const fetchAddressRemove =
    (id: number) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(addressSlice.actions.addressLoading());
            response = await AddressAPI.Delete(id);
            if (!response.isSuccess) {
                dispatch(
                    addressSlice.actions.addressError(response.displayMessage!)
                );
                return;
            }
            dispatch(addressSlice.actions.addressRemove(id));
        } catch (e) {
            dispatch(addressSlice.actions.addressError('Error address'));
        }
    };

export const fetchAddressSetActive =
    (id: number) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(addressSlice.actions.addressLoading());
            response = await AddressAPI.SetActive(id);
            if (!response.isSuccess) {
                dispatch(
                    addressSlice.actions.addressError(response.displayMessage!)
                );
                return;
            }
            dispatch(addressSlice.actions.addressActiveSet(response.data!));
        } catch (e) {
            dispatch(addressSlice.actions.addressError('Error address'));
        }
    };
