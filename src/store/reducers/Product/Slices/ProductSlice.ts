import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductGetAllResponseModel } from '../../../../models/Models/Product/Product';

type ProductsType = {
    priceMin?: number;
    priceMax?: number;
    count?: number;
    products: IProduct[];
    isLoading: boolean;
    error: '';
};

interface ProductState {
    products: IProduct[];
    productsNew: ProductsType | null;
    product: IProduct | null;
    isLoading: boolean;
    error: string;
    currentProductForModal: IProduct | null;
    visableModalProduct: boolean;
}

const initialState: ProductState = {
    products: [],
    productsNew: {
        error: '',
        isLoading: false,
        products: [],
        count: 0,
        priceMax: 0,
        priceMin: 0
    },
    product: null,
    error: '',
    isLoading: false,
    currentProductForModal: null,
    visableModalProduct: false
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productLoading(state) {
            state.isLoading = true;
        },
        productError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        productCreate(state, action: PayloadAction<IProduct>) {
            state.error = '';
            state.products = [...state.products, action.payload];
            state.isLoading = false;
        },
        productGetAll(state, action: PayloadAction<IProductGetAllResponseModel>) {
            state.error = '';
            state.products = action.payload.products;
            state.isLoading = false;
        },
        productGetById(state, action: PayloadAction<IProduct>) {
            state.product = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        productForSliderSet(state, action: PayloadAction<IProduct | null>) {
            state.currentProductForModal = action.payload;
            state.isLoading = false;
        },
        productSetVisableModal(state, action: PayloadAction<boolean>) {
            state.visableModalProduct = action.payload;
        },
        productNewLoading(state) {
            state.productsNew!.isLoading = true;
        },
        productsNewAll(state, action: PayloadAction<IProductGetAllResponseModel>) {
            state.productsNew!.count = action.payload.count;
            state.productsNew!.priceMin = action.payload.count;
            state.productsNew!.priceMax = action.payload.count;
            state.productsNew!.products = action.payload.products;
            state.productsNew!.isLoading = false;
        }
    }
});

export default productSlice.reducer;
