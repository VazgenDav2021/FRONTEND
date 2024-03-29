import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "posts"
        }),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: "posts",
                method: "POST",
                body: newPost
            })
        }),
    })
})

export const { useGetPostsQuery, useCreatePostMutation } = postApi;