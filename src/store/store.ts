import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User/UserSlice";
import brandReducer from "./reducers/Product/Slices/BrandSlice";
import categoryReducer from "./reducers/Product/Slices/CategorySlice"
import productReducer from "./reducers/Product/Slices/ProductSlice";
import productNewReducer from "./reducers/Product/Slices/ProductNewSlice"
import blogReducer from "./reducers/Blog/Slices/BlogSlice"

const rootReducer = combineReducers({
  userReducer: userReducer,
  brandReducer: brandReducer,
  categoryReducer: categoryReducer,
  productReducer: productReducer,
  productNewReducer: productNewReducer,
  blogReducer: blogReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
