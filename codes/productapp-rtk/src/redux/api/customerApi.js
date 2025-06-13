import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const customersApi = createApi({
  reducerPath: 'customersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
  endpoints: (build) => ({
    customers: build.query({
      query: () => `customers`,
    }),
    customerById: build.query({
      query: (id) => `customers/${id}`,
    }),
    newCustomer: build.mutation({
        query: customer  => ({
            url: 'customers',
            method: 'POST',
            body: customer
        })
    })
  }),
})

export const {useCustomersQuery, useCustomerByIdQuery, useNewCustomerMutation} = customersApi