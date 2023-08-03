import { createSlice } from "@reduxjs/toolkit";
import { userTrips } from '../../Local/userTrips.tsx';

const initialState = userTrips

export const userTripslice = createSlice({
    name: 'User Trips',
    initialState,
    reducers: {
        updateTrip: (state, action) => {

        },

    }
})

export const { updateTrip } = userTripslice.actions
export default userTripslice.reducer