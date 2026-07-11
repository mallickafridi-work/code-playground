import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './TitleSlice'
import { todosApi } from './todoSlice'

export const store = configureStore({
    reducer: {
        title: titleReducer,
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch