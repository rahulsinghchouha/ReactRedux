import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";


//store is global entity of project
//for creating the store we use the configure store function
//for global store like contextAPI a centralized store we save in key value pair
//ek store men multiple slice hoti hai but we have only single slice 
//ek store men hm reducer rakhte hai 
//slice is portion of data and reducers is the functionality
export const store = configureStore({
    reducer:{
        counter:CounterSlice
    }
})


//we use provider to link react with redux