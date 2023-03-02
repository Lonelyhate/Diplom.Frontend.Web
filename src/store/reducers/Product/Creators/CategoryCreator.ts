import CategoryApi from "../../../../models/API/ProductApi/CategoryApi";
import { AppDispatch } from "../../../store";
import { categorySlice } from "../Slices/CategorySlice";

export const fetchCategoriesAll = () => async (dispatch: AppDispatch) => {
  let response;
  try {
    response = await CategoryApi.GetCategories();
    if (!response.isSuccess) {
      dispatch(categorySlice.actions.categoryError(response.displayMessage!));
      return response;
    }
    dispatch(categorySlice.actions.categoryGetAll(response.data!))
  } catch (e) {
    dispatch(categorySlice.actions.categoryError("Category error"));
  }
};

export const fetchCategoryCreate = (name: string) => async (dispatch: AppDispatch) => {
    let response;
    try {
      response = await CategoryApi.CreateCategory(name);
      if (!response.isSuccess) {
        dispatch(categorySlice.actions.categoryError(response.displayMessage!));
        return response;
      }
      dispatch(categorySlice.actions.categoryCreate(response.data!))
    } catch (e) {
      dispatch(categorySlice.actions.categoryError("Category error"));
    }
}
