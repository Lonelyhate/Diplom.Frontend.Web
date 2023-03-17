import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../../models/Models/Product/Product';

interface ProductNewState {
    productsNew: IProduct[];
    isLoading: boolean;
}

const initialState: ProductNewState = {
    productsNew: [],
    isLoading: false
};

export const productNewSlice = createSlice({
    name: 'productNew',
    initialState,
    reducers: {
        productLoading(state) {
            state.isLoading = true;
        },
        productNewGet(state, action: PayloadAction<IProduct[]>) {
            state.productsNew = action.payload;
            state.isLoading = false;
        }
    }
});

export default productNewSlice.reducer;
