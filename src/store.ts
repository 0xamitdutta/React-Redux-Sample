import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userReducer'
import themeReducer from './features/themeReducer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch