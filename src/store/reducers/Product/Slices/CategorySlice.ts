import { Category } from '../../../../models/Models/Product/Category';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
    categories: Category[];
    isLoading: boolean;
    error: string;
}

const initialState: CategoryState = {
    categories: [],
    error: '',
    isLoading: false
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoryLoading(state) {
            state.isLoading = true;
        },
        categoryError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        categoryCreate(state, action: PayloadAction<Category>) {
            state.error = '';
            state.categories = [...state.categories, action.payload];
            state.isLoading = false;
        },
        categoryGetAll(state, action: PayloadAction<Category[]>) {
            state.error = '';
            state.categories = action.payload;
            state.isLoading = false;
        }
    }
});

export default categorySlice.reducer;
