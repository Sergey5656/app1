import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    search: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
    },
})
const {actions, reducer} = searchSlice
export const {setSearch} = actions;
export default reducer;