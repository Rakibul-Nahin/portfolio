import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'COUNTER',
    initialState: {
        value: 10,
        name: "",
    },

    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        
        decrement: (state) => {
            state.value -= 1
        },

        changeName: (state, action) =>{
            state.name = action.payload
        }
    }


})

export const {increment, decrement, changeName} = counterSlice.actions
export default counterSlice.reducer