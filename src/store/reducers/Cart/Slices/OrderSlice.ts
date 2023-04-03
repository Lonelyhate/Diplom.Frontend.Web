import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderModel } from '../../../../models/Models/Cart/OrderModel';

interface OrderState {
    orders: IOrderModel[];
    isLoading: boolean;
    error: string;
}

const initialState: OrderState = {
    orders: [],
    error: '',
    isLoading: false
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        orderLoading(state) {
            state.isLoading = true;
        },
        orderError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        orderGetAll(state, action: PayloadAction<IOrderModel[]>) {
            state.orders = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        orderMake(state, action: PayloadAction<IOrderModel>) {
            state.orders = [...state.orders, action.payload];
            state.error = '';
            state.isLoading = false;
        }
    }
});

export default orderSlice.reducer;
