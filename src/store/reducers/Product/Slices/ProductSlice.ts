import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../../models/Product/Product";

interface ProductState {
    products: IProduct[];
    product: IProduct | null
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    product: null,
    error: "",
    isLoading: false
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        productLoading(state) {
            state.isLoading = true;
        },
        productError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isLoading = false
        },
        productCreate(state, action: PayloadAction<IProduct>) {
            state.error = "";
            state.products = [...state.products, action.payload];
            state.isLoading = false
        },
        productGetAll(state, action: PayloadAction<IProduct[]>) {
            state.error = "";
            state.products = action.payload;
            state.isLoading = false
        },
        productGetById(state, action: PayloadAction<IProduct>) {
            state.product = action.payload;
            state.error = "";
            state.isLoading = false;
        }
    }
})

export default productSlice.reducer;