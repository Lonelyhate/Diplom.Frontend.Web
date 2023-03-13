import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../../models/Product/Product';

interface FavoritesState {
    favorites: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: FavoritesState = {
    favorites: [],
    isLoading: false,
    error: ''
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        favoritesLoading(state) {
            state.isLoading = true;
        },
        favoritesError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        favoritesGetAll(state, action: PayloadAction<IProduct[]>) {
            state.favorites = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        favortiesCreate(state, action: PayloadAction<IProduct>) {
            state.favorites = [...state.favorites, action.payload];
            state.error = '';
            state.isLoading = false;
        },
        favoritesDelete(state, action: PayloadAction<number>) {
            state.favorites = state.favorites.filter(
                p => p.id !== action.payload
            );
            state.error = '';
            state.isLoading = false;
        }
    }
});

export default favoritesSlice.reducer;
