import { configureStore } from "@reduxjs/toolkit";
import { toggleTheme } from "../Features/themeSlice";

const store = configureStore({
    reducer:{
        theme:toggleTheme
    }
})

export default store