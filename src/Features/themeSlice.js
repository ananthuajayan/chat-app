import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode : "light"
}

const themeSlice = createSlice({
    name:"theme",
    state:initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.mode = state.mode === "light"?"Dark":"light"
            console.log(state.mod);
            
        }
   }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer

