import ProductApi from '../../../../models/API/ProductApi/ProductApi';
import { IProductCreateRequestModel } from '../../../../models/Models/Product/ProductCreateRequestModel';
import { IProduct } from '../../../../models/Models/Product/Product';
import { AppDispatch } from '../../../store';
import { productNewSlice } from '../Slices/ProductNewSlice';
import { productSlice } from '../Slices/ProductSlice';
import { IProductsFilterRequestModel } from '../../../../models/Models/Product/ProductsFilterRequsetModel';

export const fetchProductAll = (request?: IProductsFilterRequestModel) => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(productSlice.actions.productLoading());
        response = await ProductApi.GetAllProduct(
            undefined,
            undefined,
            false,
            request?.sort,
            request?.minPrice,
            request?.maxPrice,
            request?.gender,
            request?.category,
            request?.sizes,
            request?.brands,
            request?.search
        );
        if (!response.isSuccess) {
            dispatch(productSlice.actions.productError(response.displayMessage!));
            return;
        }
        dispatch(productSlice.actions.productGetAll(response.data!));
    } catch (e) {
        dispatch(productSlice.actions.productError('Product error'));
    }
};

export const fetchProductCreate = (request: IProductCreateRequestModel) => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(productSlice.actions.productLoading);
        response = await ProductApi.CreateProductForm(request);
        if (!response.isSuccess) {
            dispatch(productSlice.actions.productError(response.displayMessage!));
            return;
        }
        dispatch(productSlice.actions.productCreate(response.data!));
    } catch (e) {
        dispatch(productSlice.actions.productError('Product error'));
    }
};

export const fetchProductNewGet = () => async (dispatch: AppDispatch) => {
    let response;
    dispatch(productNewSlice.actions.productLoading());
    response = await ProductApi.GetAllProduct('desc', '20');
    if (!response.isSuccess) {
        return;
    }
    dispatch(productNewSlice.actions.productNewGet(response.data?.products!));
};

export const fetchProductById = (id: string) => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(productSlice.actions.productLoading());
        response = await ProductApi.GetProductById(id);
        if (!response.isSuccess) {
            dispatch(productSlice.actions.productError(response.displayMessage!));
            return;
        }
        dispatch(productSlice.actions.productGetById(response.data!));
    } catch (e) {
        dispatch(productSlice.actions.productError('Product by id error'));
    }
};

export const setProductForModal = (product: IProduct | null) => (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.productLoading());
    dispatch(productSlice.actions.productForSliderSet(product));
};

export const setModalProductVisable = (visable: boolean) => (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.productSetVisableModal(visable));
};

export const fetchNewProducts = (requset: IProductsFilterRequestModel) => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(productSlice.actions.productNewLoading());
        response = await ProductApi.GetAllProduct(
            undefined,
            undefined,
            true,
            requset.sort,
            requset.minPrice,
            requset.maxPrice,
            requset.gender,
            requset.category,
            requset.sizes,
            requset.brands
        );
        if (!response.isSuccess) {
            dispatch(productSlice.actions.productError(response.displayMessage!));
            return;
        }
        dispatch(productSlice.actions.productsNewAll(response.data!));
    } catch (e) {
        console.log(e);
        dispatch(productSlice.actions.productError('Product by id error'));
    }
};
