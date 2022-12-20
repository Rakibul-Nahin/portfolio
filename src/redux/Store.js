import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./CounterSlice"
import coordinateReducer from './Coordinates'

export default configureStore({
	reducer: {
		counter: counterReducer,
		coordinates: coordinateReducer,
	},
})