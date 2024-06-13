import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import User from '../../model/User'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
      users: builder.query<User[], void>({
        query: () => `users`,
        providesTags: ['User']
      }),
      user: builder.query<User,string>({
        query: (id) => `users/${id}`
      }),
      addUser: builder.mutation<void, User>({
        query: user => ({
            url: '/users',
            method: 'post',
            body: user
        }),
        invalidatesTags: ['User']
      })
    }),
  });

  // exposes hooks to call endpoints
  export const  {useUserQuery, useUsersQuery, useAddUserMutation} = userApi;