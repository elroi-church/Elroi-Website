import { createApi } from "@reduxjs/toolkit/query/react";
import { apiBaseQuery } from "../../api/api.query";
import { PaginationResponse, BaseResponse } from "../../api/api.type";
import { City } from "../models/city.model";
import { CityFilterRequest } from "../models/dtos/city-filter.request";


export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getAllCity: builder.query<
      PaginationResponse<City[]>,
      CityFilterRequest
    >({
      query: (data) => {
        return {
          method: "GET",
          url: "/api/cities",
          params: data,
        };
      },
    }),
   
  }),
});

export const {
  useGetAllCityQuery,
} = cityApi;
