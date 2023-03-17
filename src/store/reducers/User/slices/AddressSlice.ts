import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAddress } from '../../../../models/Models/User/Address';

interface AddressState {
    addresses: IAddress[];
    isLoading: boolean;
    error: string;
}

const initialState: AddressState = {
    addresses: [],
    error: '',
    isLoading: false
};

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addressLoading(state) {
            state.isLoading = true;
        },
        addressError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addressGetAll(state, action: PayloadAction<IAddress[]>) {
            state.addresses = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        addressAdd(state, action: PayloadAction<IAddress>) {
            state.addresses = [...state.addresses, action.payload];
            state.error = '';
            state.isLoading = false;
        },
        addressUpdate(state, action: PayloadAction<IAddress>) {
            state.addresses = state.addresses.map(item =>
                item.id == action.payload.id ? action.payload : item
            );
            state.error = '';
            state.isLoading = false;
        },
        addressRemove(state, action: PayloadAction<number>) {
            state.addresses = state.addresses.filter(
                item => item.id != action.payload
            );
            state.error = '';
            state.isLoading = false;
        },
        addressActiveSet(state, action: PayloadAction<IAddress>) {
            state.addresses = state.addresses.map(item => {
                if (item.id == action.payload.id) {
                    return action.payload;
                } else {
                    item.isActiveAddress = 0;
                    return item;
                }
            });
            state.error = "";
            state.isLoading = false;
        }
    }
});

export default addressSlice.reducer;
