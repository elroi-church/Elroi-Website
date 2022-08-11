import { createApi } from "@reduxjs/toolkit/query/react";
import { User } from "next-auth";
import { apiBaseQuery } from "../api/api.query";
import { BaseResponse } from "../api/api.type";



export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    changeAvatar: builder.mutation<BaseResponse<User>, { avatar: File }>({
      query: (data) => {
        const { avatar } = data;
        const formData = new FormData();
        formData.append("avatar", avatar);

        return {
          method: "POST",
          url: "/api/users/change-avatar",
          data: formData,
        };
      }
    })
  
    // getauthById: builder.query<BaseResponse<auth>, { id: string }>({
    //   query: (data) => {
    //     return {
    //       method: "GET",
    //       url: `/auths/${data.id}`,
    //     };
    //   },
    // }),
    // verifyauth: builder.mutation<BaseResponse<auth>, { id: string }>({
    //   query: ({ id }) => {
    //     return {
    //       method: "POST",
    //       url: `/auths/${id}/verify`,
    //     };
    //   },
    // }),
    // getCurrentauth: builder.query<BaseResponse<auth>, null>({
    //   query: () => {
    //     return {
    //       method: "GET",
    //       url: "/auths/current-auth",
    //     };
    //   },
    // }),
  }),
});

export const {
  useChangeAvatarMutation
} = userApi;
