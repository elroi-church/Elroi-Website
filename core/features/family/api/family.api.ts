import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../../../commons/types/base-response";
import { apiBaseQuery } from "../../api/api.query";
import { PaginationResponse } from "../../api/api.type";
import { FamilyFilterRequest } from "../models/dtos/family-filter.request";
import { Family } from "../models/family";

export const familyApi = createApi({
  reducerPath: "familyApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getAllFamily: builder.query<
      PaginationResponse<Family[]>,
      FamilyFilterRequest
    >({
      query: (data) => {
        return {
          method: "GET",
          url: "/api/families",
          params: data,
        };
      },
    }),
    getFamilyDetail: builder.query<BaseResponse<Family>, { id: string }>({
      query: (data) => {
        return {
          method: "GET",
          url: `/api/families/${data.id}`,
        };
      },
    }),
    getFamilySlug: builder.query<BaseResponse<Family>, { slug: string }>({
      query: (data) => {
        return {
          method: "GET",
          url: `/api/families/slug/${data.slug}`,
        };
      },
    }),
    createFamily: builder.mutation<BaseResponse<Family>, Family>({
      query: (data) => {
        return {
          method: "POST",
          url: "/api/families",
          data,
        };
      },
    }),
    updateFamily: builder.mutation<BaseResponse<Family>, Family>({
      query: (data) => {
        return {
          method: "PUT",
          url: `/api/families/${data._id}`,
          data,
        };
      },
    }),
    deleteFamily: builder.mutation<BaseResponse<Family>, { id: string }>({
      query: (data) => {
        return {
          method: "DELETE",
          url: `/api/families/${data.id}`,
        };
      },
    }),
    // getfamilyById: builder.query<BaseResponse<family>, { id: string }>({
    //   query: (data) => {
    //     return {
    //       method: "GET",
    //       url: `/familys/${data.id}`,
    //     };
    //   },
    // }),
    // verifyfamily: builder.mutation<BaseResponse<family>, { id: string }>({
    //   query: ({ id }) => {
    //     return {
    //       method: "POST",
    //       url: `/familys/${id}/verify`,
    //     };
    //   },
    // }),
    // getCurrentfamily: builder.query<BaseResponse<family>, null>({
    //   query: () => {
    //     return {
    //       method: "GET",
    //       url: "/familys/current-family",
    //     };
    //   },
    // }),
  }),
});

export const {
  useGetAllFamilyQuery,
  useCreateFamilyMutation,
  useDeleteFamilyMutation,
  useGetFamilyDetailQuery,
  useUpdateFamilyMutation,
  useGetFamilySlugQuery,
} = familyApi;
