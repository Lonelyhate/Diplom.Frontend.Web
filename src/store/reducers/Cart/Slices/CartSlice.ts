import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICart } from '../../../../models/API/CartApi/CartModels';

interface CartState {
    cart: ICart | null;
    isLoading: boolean;
    error: string;
    isLoadingPlus: boolean;
    isLoadingMinus: boolean;
}

const initialState: CartState = {
    cart: null,
    error: '',
    isLoading: false,
    isLoadingPlus: false,
    isLoadingMinus: false
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartLoading(state) {
            state.isLoading = true;
        },
        cartLoadingPlus(state) {
            state.isLoadingPlus = true;
        },
        cartLoadingMinus(state) {
            state.isLoadingMinus = true;
        },
        cartError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
            state.isLoadingPlus = false;
            state.isLoadingMinus = false;
        },
        cartGet(state, action: PayloadAction<ICart>) {
            state.cart = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        cartAddProduct(state, action: PayloadAction<ICart>) {
            state.cart = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        cartDeleteAllProduct(state, action: PayloadAction<ICart>) {
            state.cart = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        cartPlusProduct(state, action: PayloadAction<ICart>) {
            state.cart = action.payload;
            state.error = '';
            state.isLoadingPlus = false;
        },
        cartMinusProduct(state, action: PayloadAction<ICart>) {
            state.cart = action.payload;
            state.error = '';
            state.isLoadingMinus = false;
        }
    }
});

export default cartSlice.reducer;
