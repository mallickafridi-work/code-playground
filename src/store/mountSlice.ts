import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const mountSlice = createSlice({
    name: 'mount',
    initialState: { value: true, text: 'Unmount' },
    reducers: {
        setMount: (state, action: PayloadAction<boolean>) => {
            (action.payload) ? (state.value = false, state.text = 'Unmount') : (state.value = true, state.text = 'Mount')
        }
    }
})

export const { setMount } = mountSlice.actions
export default mountSlice.reducer