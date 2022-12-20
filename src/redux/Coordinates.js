import { createSlice } from "@reduxjs/toolkit";

export const coordinates = createSlice({
    name: "COORDINATES",
    initialState: {
        latitude: "",
        longitude: "",
    },

    reducers: {
        setLatitude: (state, action)=> {
            state.latitude = action.payload
        },

        setLongitude: (state, action)=> {
            state.longitude = action.payload
        },

    }
})

export const {setLatitude, setLongitude} = coordinates.actions;
export default coordinates.reducer;