import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiscount } from '../../../../models/Models/User/Discount';

interface DiscountState {
    discount: IDiscount | null;
    isLoading: boolean;
    error: string;
}

const initialState: DiscountState = {
    discount: null,
    error: '',
    isLoading: false
};

export const discountSlice = createSlice({
    name: 'discount',
    initialState,
    reducers: {
        discountLoading(state) {
            state.isLoading = true;
        },
        discountError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        discountCreate(state, action: PayloadAction<IDiscount>) {
            state.discount = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        discountGetById(state, action: PayloadAction<IDiscount>) {
            state.discount = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        discountUpdate(state, action: PayloadAction<IDiscount>) {
            state.discount = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        discountDelete(state) {
            state.discount = null;
            state.error = "";
            state.isLoading = false;
        }
    }
});

export default discountSlice.reducer;
