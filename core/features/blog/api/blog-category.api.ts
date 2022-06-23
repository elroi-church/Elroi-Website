// import { LoginRequest, LoginResponse } from "./types";

import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "../../api/api.query";
import { BaseResponse, PaginationResponse } from "../../api/api.type";
import { BlogCategory } from "../dtos/models/blog-category.entity";
import { BlogCategoryFilterRequest } from "../dtos/requests/blog-category-filter.request";

export const blogCategoryApi = createApi({
  reducerPath: "blogCategoryApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getAllBlogCategory: builder.query<
      PaginationResponse<BlogCategory[]>,
      BlogCategoryFilterRequest
    >({
      query: (data) => {
        return {
          method: "GET",
          url: "/api/blog/categories",
          params: data,
        };
      },
    }),
    getBlogCategoryDetail: builder.query<
      BaseResponse<BlogCategory>,
      { id: string }
    >({
      query: (data) => {
        return {
          method: "GET",
          url: `/api/blog/categories/${data.id}`,
        };
      },
    }),
    createBlogCategory: builder.mutation<
      BaseResponse<BlogCategory>,
      BlogCategory
    >({
      query: (data) => {
        return {
          method: "POST",
          url: "/api/blog/categories",
          data,
        };
      },
    }),
    updateBlogCategory: builder.mutation<
      BaseResponse<BlogCategory>,
      BlogCategory
    >({
      query: (data) => {
        return {
          method: "PUT",
          url: `/api/blog/categories/${data._id}`,
          data,
        };
      },
    }),
    deleteBlogCategory: builder.mutation<
      BaseResponse<BlogCategory>,
      { id: string }
    >({
      query: (data) => {
        return {
          method: "DELETE",
          url: `/api/blog/categories/${data.id}`,
        };
      },
    }),
  }),
});

export const {
  useGetAllBlogCategoryQuery,
  useCreateBlogCategoryMutation,
  useDeleteBlogCategoryMutation,
  useGetBlogCategoryDetailQuery,
  useUpdateBlogCategoryMutation,
} = blogCategoryApi;
