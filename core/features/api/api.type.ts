import { AxiosRequestHeaders } from "axios";

declare module "@reduxjs/toolkit/query/react" {
  export interface FetchArgs {
    headers?: AxiosRequestHeaders;
  }
}

export class BaseFilter {
  page?: number = 1;
  limit?: number = 10;
}

export interface LinkHeaderEntry {
  page: string;
  per_page: string;
  rel: string;
  sha: string;
  url: string;
}

export interface BaseResponse<T> {
  data: T;
  statusCode: number;
  message: string;
}

export interface PaginationResponse<T> extends BaseResponse<T> {
  currentPage: number;
  nextPage: number;
  hasNextPage: boolean;
  prevPage: number;
  hasPrevPage: boolean;
  lastPage: number;
  limit: number;
  total: number;
}

export interface ResponseWithLink<T> {
  response: T;
  next?: LinkHeaderEntry;
  last?: LinkHeaderEntry;
  prev?: LinkHeaderEntry;
  first?: LinkHeaderEntry;
}

export interface ErrorData {
  error: any;
  message: string;
  path: string;
  statusCode: number;
  timestamp: string;
}

export interface ErrorResponse {
  status: number;
  data: ErrorData;
}


export class BaseFilterRequest {
  /**
   * The page number.
   */

  page?: number = 1;

  /**
   * The page limit.
   *
   * @default 10
   *
   * @example 10
   *
   */
  limit?: number = 10;
}
