import { Action } from "../actions/posts";
import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export interface PostsState {
    posts: string[];
}

const initialState: PostsState = {
    posts: []
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...state.posts, action.payload];
        default:
            return state;
    }
}

export default reducer;
