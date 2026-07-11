import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            providesTags: ['Todos']
        }),
        addTodo: builder.mutation({
            query: (text) => ({
                url: '/todos',
                method: 'POST',
                body: { text },
            }),
            invalidatesTags: ['Todos']
        }),
        updateTodo: builder.mutation({
            query: ({ id, text }) => ({
                url: `/todos/${id}`,
                method: 'PUT',
                body: { text },
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todos']
        })
    })
})

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todosApi
