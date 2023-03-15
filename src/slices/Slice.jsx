import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
    name : "theme",
    initialState : {
        background : "white",
        color : "black"
    },
    reducers : {
        chooseTheme : (state,action) => {
            state.background = action.payload.background
            state.color = action.payload.color
            return state;
        }
    }

})

export const {chooseTheme} = theme.actions; 