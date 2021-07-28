import { createSlice } from '@reduxjs/toolkit';

let locationData = [];


let locationSlice = createSlice({
    name:'locations',
    initialState:{
        locations:locationData
    },
    reducers:{
        addlocation:(state,action)=>{
          return{
              ...state,
              locations:action.payload
          }
        }
    }
});


export const { addlocation } = locationSlice.actions;
export const selectLocation = state => state.locationReducer.locations;
export default locationSlice.reducer;

