import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name:"category",
    initialState: {
        categoryList:[],
    },
    reducers: {
        setCategoryList(state, action) {
            state.categoryList = action.payload
        }
    }
})

export const {
    setCategoryList,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;