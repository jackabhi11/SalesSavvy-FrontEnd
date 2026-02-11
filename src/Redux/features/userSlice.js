import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
       userName: localStorage.getItem("userName") || ""
    },
    reducers:{
        setUserName(state, action) {
            state.userName = action.payload
            console.log(state.userName)
        },
        setUserNameToNone(state) {
            state.userName = "";
            localStorage.removeItem("userName");
        }
    }
})

export const {
    setUserName,
    setUserNameToNone
} = userSlice.actions;

export default userSlice.reducer;