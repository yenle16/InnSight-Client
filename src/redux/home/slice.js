import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    message: 'halo'
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        sample: (state, { payload }) => {
            state.data = [1, 2, 3]
        }
    },

})

export const { sample } = homeSlice.actions

export default homeSlice.reducer