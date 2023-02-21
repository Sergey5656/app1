import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryID: '',
}

const categoryIDSlice = createSlice({
    name: 'categoryID',
    initialState,
    reducers: {
        setCategoryID: (state, action) => {
            state.search = action.payload
        },
    },
})
const {actions, reducer} = categoryIDSlice
export const {setCategoryID} = actions;
export default reducer;