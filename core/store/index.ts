import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { blogCategoryApi } from "../features/blog/api/blog-category.api";
import { blogPostApi } from "../features/blog/api/blog-post.api";
import modalSlice from "../features/commons/modalSlice";

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
    [blogPostApi.reducerPath]: blogPostApi.reducer,
    [blogCategoryApi.reducerPath]: blogCategoryApi.reducer,
    modal: modalSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
