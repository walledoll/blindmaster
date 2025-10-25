import { configureStore } from "@reduxjs/toolkit";
import typingReducer from './typingSlice'

export const store = configureStore({
    reducer: {
        typing: typingReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;