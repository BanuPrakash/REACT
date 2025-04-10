import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import   User  from '../../models/User'

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
  tagTypes: ['CustomerTag'],
  endpoints: (build) => ({
    customers: build.query<User[], void>({
      query: () => `users`,
      providesTags: ['CustomerTag']
    }),
    customer: build.query<User, string>({
        query: (id) => `users/${id}`
    }),
    customerPost: build.mutation<void, User>({
        query: user => ({
            url: `/users`,
            method: 'POST',
            body: user
        }),
        invalidatesTags: ['CustomerTag']
    }),
  }),
})

export const {useCustomersQuery, useCustomerQuery, useCustomerPostMutation} = customerApi;