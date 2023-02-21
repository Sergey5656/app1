import {configureStore} from "@reduxjs/toolkit";
import actions from "../slices/searchSlice/searchSlice";

export default configureStore({
    reducer: {
        search: actions,
        categoryID: actions,
    },
});
