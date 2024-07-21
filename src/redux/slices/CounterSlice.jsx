import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState = {
    value:0
}
//createSlice Function is used for create the slice in this function we create the object and
//send with atleast three value name, initialState and third is reducers (reducers is the function
// ality of that )
//increament men hm state ke andar jo value hai usko increment kr denge state 
//create Slice hmko two thing deta hai 1.reducer 2.actions
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state) =>{
            state.value +=  1;
        },
        decrement : (state)=>{
            state.value -=  1;
        }
    }
})

//export its reducers(functionality) // for getting reducers we get reducers with the help of actions
  //always export both actions and reducers 
export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;
