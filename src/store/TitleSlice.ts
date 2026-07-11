import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const titleSlice = createSlice({
    name: 'title',
    initialState: { value: 'React Hooks' },
    reducers: {
        changeTitle: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { changeTitle } = titleSlice.actions
export default titleSlice.reducer