import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "../../api/api.query";
import { PaginationResponse, BaseResponse } from "../../api/api.type";
import { State } from "../models/state.model";
import { StateFilterRequest } from "../models/dtos/state-filter.request";


export const stateApi = createApi({
  reducerPath: "stateApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getAllState: builder.query<
      PaginationResponse<State[]>,
      StateFilterRequest
    >({
      query: (data) => {
        return {
          method: "GET",
          url: "/api/states",
          params: data,
        };
      },
    }),
   
  }),
});

export const {
  useGetAllStateQuery,
} = stateApi;
