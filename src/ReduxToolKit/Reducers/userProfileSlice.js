import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: { first: '', last: '' },
    country: '',
    email: '',
}

export const userProfileSlice = createSlice({
    name: 'User Profile',
    initialState,
    reducers: {
        updateUserProfile: (state, action) => {
            state.name = action.payload.name;
            state.country = action.payload.country;
            state.email = action.payload.email;
        },

    }
})

export const { updateUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer