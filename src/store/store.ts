import { configureStore } from '@reduxjs/toolkit'
import mountReducer from './mountSlice'
import titleReducer from './TitleSlice'
import { todosApi } from './TodoSlice'

export const store = configureStore({
    reducer: {
        title: titleReducer,
        mount: mountReducer,
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch