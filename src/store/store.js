import {configureStore} from "@reduxjs/toolkit";
import searchSlice from "../slices/searchSlice/searchSlice";
import tittleSlice from "../slices/categorySlice/tittleSlice";
import userReducer from "../slices/user/userSlice";


export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        tittle: tittleSlice.reducer,
        user: userReducer,
    }
});
