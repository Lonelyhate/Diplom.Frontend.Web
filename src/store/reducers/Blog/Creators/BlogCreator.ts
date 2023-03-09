import BlogApi from "../../../../models/API/BlogApi/BlogAPI";
import { IBlog } from "../../../../models/Blog";
import { AppDispatch } from "../../../store";
import { blogSlice } from "../Slices/BlogSlice";

export const fetchBlogCreate =
  (blog: IBlog) => async (dispatch: AppDispatch) => {
    let response;
    try {
      dispatch(blogSlice.actions.blogLoading());
      response = await BlogApi.CreateBlogForm(blog);
      if (!response.isSuccess) {
        dispatch(blogSlice.actions.blogError(response.displayMessage!));
        return;
      }

      dispatch(blogSlice.actions.blogCreate(response.data!));
    } catch (e) {
      dispatch(blogSlice.actions.blogError("Blog error"));
    }
  };

export const fetchBlogsGetAll = () => async (dispatch: AppDispatch) => {
  let response;
  try {
    dispatch(blogSlice.actions.blogLoading());
    response = await BlogApi.GetBlogs();
    if (!response.isSuccess) {
      dispatch(blogSlice.actions.blogError(response.displayMessage!));
      return;
    }
    dispatch(blogSlice.actions.blogGetAll(response.data!));
  } catch (e) {
    dispatch(blogSlice.actions.blogError("Blog error"));
  }
};
