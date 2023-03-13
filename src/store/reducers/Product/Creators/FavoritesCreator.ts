import FavoritesApi from '../../../../models/API/ProductApi/FavoritesApi';
import { AppDispatch } from '../../../store';
import { favoritesSlice } from '../Slices/FavoritesSlice';

export const fetchFavoritesAll = () => async (dispatch: AppDispatch) => {
    let response;
    try {
        dispatch(favoritesSlice.actions.favoritesLoading());
        response = await FavoritesApi.GetAllFavorites();
        if (!response.isSuccess) {
            dispatch(
                favoritesSlice.actions.favoritesError(response.displayMessage!)
            );
            return;
        }
        dispatch(favoritesSlice.actions.favoritesGetAll(response.data!));
    } catch (e) {
        dispatch(favoritesSlice.actions.favoritesError('Favorites error'));
    }
};

export const fetchFavoritesAdd =
    (id: number) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(favoritesSlice.actions.favoritesLoading());
            response = await FavoritesApi.AddToFavorites(id);
            if (!response.isSuccess) {
                dispatch(
                    favoritesSlice.actions.favoritesError(
                        response.displayMessage!
                    )
                );
                return;
            }
            dispatch(favoritesSlice.actions.favortiesCreate(response.data!));
        } catch (e) {
            dispatch(favoritesSlice.actions.favoritesError('Favorites error'));
        }
    };

export const fetchFavoritesDelete =
    (id: number) => async (dispatch: AppDispatch) => {
        let response;
        try {
            dispatch(favoritesSlice.actions.favoritesLoading());
            response = await FavoritesApi.DeleteFromFavorites(id);
            if (!response.isSuccess) {
                dispatch(
                    favoritesSlice.actions.favoritesError(
                        response.displayMessage!
                    )
                );
                return;
            }
            dispatch(favoritesSlice.actions.favoritesDelete(id));
        } catch (e) {
            dispatch(favoritesSlice.actions.favoritesError('Favorites error'));
        }
    };

export const fetchFavoritesCheck = (id: number) => async (dispatch: AppDispatch) => {
    let response 
    try 
    {
        dispatch(favoritesSlice.actions.favoritesLoading());
        response = await FavoritesApi.CheckFavorites(id);
        if (!response.isSuccess) {
            dispatch(favoritesSlice.actions.favoritesError(response.displayMessage!))
        }
        
    } catch (e) {
        dispatch(favoritesSlice.actions.favoritesError("Favorites error"))
    }
}
