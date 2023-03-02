import { AppDispatch } from "../../store";
import AuthorizationAPI from "../../../models/API/AuthorizationApi/AuthorizationAPI";
import { userSlice } from "./UserSlice";
import { IUser } from "../../../models/User";

export const fetchUserLogin =
  (login: string, password: string) => async (dispacth: AppDispatch) => {
    let response;
    try {
      dispacth(userSlice.actions.userLoading());
      response = await AuthorizationAPI.UserLogin(login, password);
      if (!response.isSuccess) {
        dispacth(userSlice.actions.userError(response.displayMessage!));
        return;
      }
      dispacth(userSlice.actions.userSuccess(response.data!));
      localStorage.setItem("token", response.data?.token!);
    } catch (e) {
      dispacth(userSlice.actions.userError("Error userLogin"));
    }
  };

export const userErrorClean = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.userCleanError());
};

export const fetchUserRegistration =
  (login: string, password: string, passwordConfrim: string) =>
  async (dispatch: AppDispatch) => {
    let response;
    try {
      dispatch(userSlice.actions.userLoading());
      response = await AuthorizationAPI.UserRegistration(
        login,
        password,
        passwordConfrim
      );
      if (!response.isSuccess) {
        dispatch(userSlice.actions.userError(response.displayMessage!));
        return;
      }
      dispatch(userSlice.actions.userSuccess);
      localStorage.setItem("token", response.data?.token!);
    } catch (e) {
      dispatch(userSlice.actions.userError("Error userLogin"));
    }
  };

export const fetchUserAuth = () => async (dispacth: AppDispatch) => {
  let response;
  try {
    dispacth(userSlice.actions.userLoading());
    response = await AuthorizationAPI.UserAuth();

    if (!response.isSuccess) {
      dispacth(userSlice.actions.userError(response.displayMessage!));
      return;
    }
    dispacth(userSlice.actions.userAuth(response.data!));
    localStorage.setItem("token", response.data?.token!);
  } catch (e) {
    dispacth(userSlice.actions.userError("error user auth"));
  }
};

export const fetchUserUpdate =
  (user: IUser) => async (dispacth: AppDispatch) => {
    let response;
    try {
      dispacth(userSlice.actions.userLoading);
      response = await AuthorizationAPI.UserUpdate(user);

      if (!response.isSuccess) {
        dispacth(userSlice.actions.userError(response.displayMessage!));
        return;
      }

      dispacth(userSlice.actions.userUpdate(response.data!));
      localStorage.setItem("token", response.data?.token!);
    } catch (e) {
      dispacth(userSlice.actions.userError("error user auth"));
    }
  };

export const userLogout = () => async (dispacth: AppDispatch) => {
  localStorage.removeItem("token");
  dispacth(userSlice.actions.userLogout());
};
