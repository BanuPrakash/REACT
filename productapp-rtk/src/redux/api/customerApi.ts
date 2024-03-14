import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Customer } from '../../model/Customer'

// to perform CRUD operations
export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
    tagTypes: ['Customers'],
    endpoints: (builder) => ({
      customers: builder.query<Customer[], void>({
        query: () => 'customers',
        providesTags: ['Customers']
      }),
      customer : builder.query<Customer, string>({
        query: (id) => `customers/${id}`
      }),
      addCustomer: builder.mutation<void, Customer>({
        query: customer => ({
            url: '/customers',
            method: 'POST',
            body: customer
        }),
        invalidatesTags: ['Customers']
      })
    }),
  })

  export const {useCustomersQuery, useCustomerQuery, useAddCustomerMutation} = customerApi;