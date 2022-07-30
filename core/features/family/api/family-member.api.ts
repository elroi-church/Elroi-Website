import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../../../commons/types/base-response";
import { apiBaseQuery } from "../../api/api.query";
import { PaginationResponse } from "../../api/api.type";
import { FamilyMemberFilterRequest } from "../models/dtos/family-member-filter.request";
import { FamilyMember } from "../models/family-member";




export const familyMemberApi = createApi({
  reducerPath: "familyMemberApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getAllFamilyMember: builder.query<
      PaginationResponse<FamilyMember[]>,
      FamilyMemberFilterRequest
    >({
      query: (data) => {
        return {
          method: "GET",
          url: "/api/family-members",
          params: data,
        };
      },
    }),
    getFamilyMemberDetail: builder.query<BaseResponse<FamilyMember>, { id: string }>({
      query: (data) => {
        return {
          method: "GET",
          url: `/api/family-members/${data.id}`,
        };
      },
    }),
    getFamilyMemberSlug: builder.query<BaseResponse<FamilyMember>, { slug: string }>({
      query: (data) => {
        return {
          method: "GET",
          url: `/api/family-members/slug/${data.slug}`,
        };
      },
    }),
    createFamilyMember: builder.mutation<BaseResponse<FamilyMember>, FamilyMember>({
      query: (data) => {
        return {
          method: "POST",
          url: "/api/family-members",
          data,
        };
      },
    }),
    updateFamilyMember: builder.mutation<BaseResponse<FamilyMember>, FamilyMember>({
      query: (data) => {
        return {
          method: "PUT",
          url: `/api/family-members/${data._id}`,
          data,
        };
      },
    }),
    deleteFamilyMember: builder.mutation<BaseResponse<FamilyMember>, { id: string }>({
      query: (data) => {
        return {
          method: "DELETE",
          url: `/api/family-members/${data.id}`,
        };
      },
    }),
    // getfamilymemberById: builder.query<BaseResponse<familymember>, { id: string }>({
    //   query: (data) => {
    //     return {
    //       method: "GET",
    //       url: `/familymembers/${data.id}`,
    //     };
    //   },
    // }),
    // verifyfamilymember: builder.mutation<BaseResponse<familymember>, { id: string }>({
    //   query: ({ id }) => {
    //     return {
    //       method: "POST",
    //       url: `/familymembers/${id}/verify`,
    //     };
    //   },
    // }),
    // getCurrentfamilymember: builder.query<BaseResponse<familymember>, null>({
    //   query: () => {
    //     return {
    //       method: "GET",
    //       url: "/familymembers/current-familymember",
    //     };
    //   },
    // }),
  }),
});

export const {
  useGetAllFamilyMemberQuery,
  useCreateFamilyMemberMutation,
  useDeleteFamilyMemberMutation,
  useGetFamilyMemberDetailQuery,
  useUpdateFamilyMemberMutation,
  useGetFamilyMemberSlugQuery,
} = familyMemberApi;
