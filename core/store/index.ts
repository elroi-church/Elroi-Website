import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { cityApi } from "../features/area/api/city.api";
import { stateApi } from "../features/area/api/state.api";
import { authApi } from "../features/auth/api/auth.api";
import { blogCategoryApi } from "../features/blog/api/blog-category.api";
import { blogPostApi } from "../features/blog/api/blog-post.api";
import modalSlice from "../features/commons/modalSlice";
import { familyMemberApi } from "../features/family/api/family-member.api";
import { familyApi } from "../features/family/api/family.api";
import { userApi } from "../features/user/user.api";

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,


    [blogPostApi.reducerPath]: blogPostApi.reducer,
    [blogCategoryApi.reducerPath]: blogCategoryApi.reducer,

    [familyApi.reducerPath]: familyApi.reducer,
    [familyMemberApi.reducerPath]: familyMemberApi.reducer,

    [cityApi.reducerPath]: cityApi.reducer,
    [stateApi.reducerPath]: stateApi.reducer,

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
