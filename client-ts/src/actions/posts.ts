import { Dispatch } from 'redux';
import * as api from '../api/';
import { FETCH_ALL } from '../constants/actionTypes';

export type Action = { type: string; payload: string };

// Action Creators
export const getPosts = () => async (dispatch: Dispatch<Action>) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}