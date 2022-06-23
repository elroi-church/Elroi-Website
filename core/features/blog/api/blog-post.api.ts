// import { LoginRequest, LoginResponse } from "./types";

import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "../../api/api.query";
import { BaseResponse, PaginationResponse } from "../../api/api.type";
import { BlogPost } from "../dtos/models/blog-post.entity";
import { BlogPostFilterRequest } from "../dtos/requests/blog-filter.request";

// import { Auth } from "./types";

export const blogPostApi = createApi({
  reducerPath: "blogPostApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getAllBlogPost: builder.query<
      PaginationResponse<BlogPost[]>,
      BlogPostFilterRequest
    >({
      query: (data) => {
        return {
          method: "GET",
          url: "/api/blog/posts",
          params: data,
        };
      },
    }),
    getBlogPostDetail: builder.query<BaseResponse<BlogPost>, { id: string }>({
      query: (data) => {
        return {
          method: "GET",
          url: `/api/blog/posts/${data.id}`,
        };
      },
    }),
    getBlogPostSlug: builder.query<BaseResponse<BlogPost>, { slug: string }>({
      query: (data) => {
        return {
          method: "GET",
          url: `/api/blog/posts/slug/${data.slug}`,
        };
      },
    }),
    createBlogPost: builder.mutation<BaseResponse<BlogPost>, BlogPost>({
      query: (data) => {
        return {
          method: "POST",
          url: "/api/blog/posts",
          data,
        };
      },
    }),
    updateBlogPost: builder.mutation<BaseResponse<BlogPost>, BlogPost>({
      query: (data) => {
        return {
          method: "PUT",
          url: `/api/blog/posts/${data._id}`,
          data,
        };
      },
    }),
    deleteBlogPost: builder.mutation<BaseResponse<BlogPost>, { id: string }>({
      query: (data) => {
        return {
          method: "DELETE",
          url: `/api/blog/posts/${data.id}`,
        };
      },
    }),
    // getblogpostById: builder.query<BaseResponse<blogpost>, { id: string }>({
    //   query: (data) => {
    //     return {
    //       method: "GET",
    //       url: `/blogposts/${data.id}`,
    //     };
    //   },
    // }),
    // verifyblogpost: builder.mutation<BaseResponse<blogpost>, { id: string }>({
    //   query: ({ id }) => {
    //     return {
    //       method: "POST",
    //       url: `/blogposts/${id}/verify`,
    //     };
    //   },
    // }),
    // getCurrentblogpost: builder.query<BaseResponse<blogpost>, null>({
    //   query: () => {
    //     return {
    //       method: "GET",
    //       url: "/blogposts/current-blogpost",
    //     };
    //   },
    // }),
  }),
});

export const {
  useGetAllBlogPostQuery,
  useCreateBlogPostMutation,
  useDeleteBlogPostMutation,
  useGetBlogPostDetailQuery,
  useUpdateBlogPostMutation,
  useGetBlogPostSlugQuery,
} = blogPostApi;
