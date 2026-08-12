import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const titleSlice = createSlice({
    name: 'title',
    initialState: { value: 'React Hooks' },
    reducers: {
        changeTitle: (state, action: PayloadAction<number>) => {
            (action.payload === 5)
                ? state.value = 'Banana'
                : state.value = 'React Hooks'
        }
    }
})

export const { changeTitle } = titleSlice.actions
export default titleSlice.reducer