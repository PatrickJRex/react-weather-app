import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/locations/locationSlice';
import forecastReducer from '../features/forecasts/forecastSlice';

export const store = configureStore({
    reducer:{
        locationReducer,
        forecastReducer
    }
})