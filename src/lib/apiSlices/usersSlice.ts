import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signout: build.mutation({
      query: () => ({
        url: "/api/auth/signout",
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginMutation, useSignoutMutation } =
  userApi;
