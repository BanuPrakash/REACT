import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import   User  from '../../models/User'

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
  endpoints: (build) => ({
    customers: build.query<User[], void>({
      query: () => `users`,
    }),
    customer: build.query<User, string>({
        query: (id) => `users/${id}`
    })
  }),
})

export const {useCustomersQuery, useCustomerQuery} = customerApi;