import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode : "light"
}

const themeSlice = createSlice({
    name:"theme",
    state:initialState,
    reducers:(state)=>{
        state.mode = state.mode === "light"?"dark":"light"
    }
})