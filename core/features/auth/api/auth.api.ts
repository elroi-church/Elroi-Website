import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../../../commons/types/base-response";
import { apiBaseQuery } from "../../api/api.query";
import { PaginationResponse } from "../../api/api.type";
import { User } from "../../user/models/user";
import { RegisterRequest } from "../dtos/register.request";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<BaseResponse<User>, null>({
      query: () => {
        return {
          method: "GET",
          url: "/api/auth/profile",
        };
      },
    }),

    register: builder.mutation<BaseResponse<User>, RegisterRequest>({
      query: (data) => {
        return {
          method: "POST",
          url: "/api/auth/register",
          data,
        };
      },
    }),

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

export const { useGetProfileQuery, useRegisterMutation } = authApi;
