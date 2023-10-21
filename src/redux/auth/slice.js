import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login: (state, { payload }) => {
        //     state.hotelList = payload
        // },
    },

})

export const { searchHotel, getHotel } = authSlice.actions

export default authSlice.reducer