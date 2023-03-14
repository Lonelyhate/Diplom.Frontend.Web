import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICart } from '../../../../models/API/CartApi/CartModels';

interface CartState {
    cart: ICart | null;
    isLoading: boolean;
    error: string;
}

const initialState: CartState = {
    cart: null,
    error: '',
    isLoading: false
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartLoading(state) {
            state.isLoading = true;
        },
        cartError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        cartGet(state, action: PayloadAction<ICart>) {
            state.cart = action.payload;
            state.error = '';
            state.isLoading = false;
        }
    }
});

export default cartSlice.reducer;
