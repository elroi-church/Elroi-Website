import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../../../commons/types/base-response";
import { apiBaseQuery } from "../../api/api.query";
import { PaginationResponse } from "../../api/api.type";
import { User } from "../../user/models/user";



export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    
    getProfile: builder.query<
      BaseResponse<User>,
      {}
    >({
      query: () => {
        return {
          method: "GET",
          url: "/api/auth/profile",
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

export const {
  useGetProfileQuery
} = authApi;
