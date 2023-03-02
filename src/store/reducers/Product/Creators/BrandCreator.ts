import BrandApi from "../../../../models/API/ProductApi/BrandApi";
import { AppDispatch } from "../../../store";
import { brandSlice } from "../Slices/BrandSlice";

export const fetchBrandsAll = () => async (dispatch: AppDispatch) => {
  let response;
  try {
    dispatch(brandSlice.actions.brandLoading());
    response = await BrandApi.GetBrands();
    if (!response.isSuccess) {
      dispatch(brandSlice.actions.brandError(response.displayMessage!));
      return;
    }
    dispatch(brandSlice.actions.brandGetAll(response.data!));
  } catch (e) {
    dispatch(brandSlice.actions.brandError("Brand error"));
  }
};

export const fetchBrandCreate =
  (name: string) => async (dispatch: AppDispatch) => {
    let response;
    try {
      dispatch(brandSlice.actions.brandLoading());
      response = await BrandApi.CreateBrand(name);
      if (!response.isSuccess) {
        dispatch(brandSlice.actions.brandError(response.displayMessage!));
        return;
      }
      dispatch(brandSlice.actions.brandCreate(response.data!));
    } catch (e) {
      dispatch(brandSlice.actions.brandError("Brand error"));
    }
  };
