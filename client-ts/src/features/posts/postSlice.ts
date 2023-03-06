import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PostsState {
    posts: string[];
}

const initialState = {
    posts: []
} as PostsState;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001',
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Access-Control-Allow-Headers', '*');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<PostsState[], number | void>({
            query: () => ({
                url: `/posts`,
            })
        })
    })
});

export const { useGetPostsQuery } = apiSlice;