import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {value : {
        username: "User",
        password: "Password"
    }},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})

export default userSlice.reducer