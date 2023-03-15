import { configureStore } from "@reduxjs/toolkit";
import { theme } from "../slices/Slice";


export const store = configureStore({
    reducer :{
        theme : theme.reducer
    }
}) 
