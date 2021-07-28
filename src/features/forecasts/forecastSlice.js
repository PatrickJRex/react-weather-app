import { createSlice } from '@reduxjs/toolkit';


let forecastSlice = createSlice({
    name:'locations',
    initialState:{
        forecasts:[]
    },
    reducers:{
        addForecast:(state,action)=>{
            
        }
    }
});


export const { addForecast } = forecastSlice.actions;
export default forecastSlice.reducer;

