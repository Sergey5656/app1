import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tittle: '',
}

const tittleSlice = createSlice({
    name: 'tittle',
    initialState,
    reducers: {
        nowTittle: state => {
            state.tittle = 'test'
        },
    },
})
export const {actions, reducer} = tittleSlice;
export const {nowTittle} = tittleSlice.actions;
export default tittleSlice;