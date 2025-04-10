import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Post from '../../models/Post'

export const postsApi  = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        posts: build.query<Post[], number | void>({
            query: (page = 1) => `posts?_start=${page}&_limit=10`
        })
    })
})

export const {usePostsQuery, usePrefetch} = postsApi