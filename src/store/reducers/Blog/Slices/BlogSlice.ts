import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBlog } from '../../../../models/Models/Blog/Blog';

interface BlogState {
    blogs: IBlog[];
    isLoading: boolean;
    error: string;
}

const initialState: BlogState = {
    blogs: [],
    isLoading: false,
    error: ''
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        blogLoading(state) {
            state.isLoading = true;
        },
        blogError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        blogGetAll(state, action: PayloadAction<IBlog[]>) {
            state.blogs = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        blogCreate(state, action: PayloadAction<IBlog>) {
            state.blogs = [...state.blogs, action.payload];
            state.error = '';
            state.isLoading = false;
        }
    }
});

export default blogSlice.reducer;
