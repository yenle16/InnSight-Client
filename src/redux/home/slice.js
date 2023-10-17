import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hotelList: [],
    hotel: {},
    room: {},
    message: 'halo'
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        searchHotel: (state, { payload }) => {
            state.hotelList = payload
        },
        getHotel: (state, { payload }) => {
            state.hotel = payload
        }
    },

})

export const { searchHotel, getHotel } = homeSlice.actions

export default homeSlice.reducer