import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/posts/counterSlice'

// Create Redux Store
export const store = configureStore({
    reducer: { counter: counterReducer } // this will automaticly call combineReducers - No need combineReducers any more - 
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;