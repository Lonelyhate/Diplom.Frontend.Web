import { Brand } from "../../../../models/Product/Brand";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BrandState {
  brands: Brand[];
  isLoading: boolean;
  error: string;
}

const initialState: BrandState = {
  brands: [],
  error: "",
  isLoading: false
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    brandLoading(state) {
      state.isLoading = true;
    },
    brandGetAll(state, action: PayloadAction<Brand[]>) {
      state.brands = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    brandCreate(state, action: PayloadAction<Brand>) {
      state.brands = [...state.brands, action.payload];
      state.isLoading = false;
      state.error = "";
    },
    brandError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export default brandSlice.reducer;
