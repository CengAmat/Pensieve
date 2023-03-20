import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PostsState {
    posts: string[];
}

export interface Post {
    post: string
}

type PostsResponse = Post[]

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/',
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<PostsResponse, number | void>({
            query: () => 'posts'
        }),
        createPost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: `posts`,
                method: 'POST',
                body,
            })
        })
    })
});

export const { useGetPostsQuery, useCreatePostMutation } = apiSlice;