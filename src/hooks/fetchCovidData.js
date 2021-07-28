import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectLocation } from '../features/locations/locationSlice';





export const FetchCovidData = () => {
const stateLocation = useSelector(selectLocation);
const [covidData, setCovidData ] = useState([]);
const [isLoading,setIsLoading] = useState(true);
const [error,setError] = useState(null);

useEffect(() => {
    let isSubscribed = true;
    let url = `https://api.covidactnow.org/v2/state/${stateLocation.regionCode}.json?apiKey=${process.env.REACT_APP_COVID_DATA_KEY}`;
    
     
    async function fetchData(){
       if(isSubscribed){
        const request = await axios.get(url);
        setIsLoading(false);
        setCovidData(request.data.actuals);
    
        if(request == null) {
            setError("request failed");
        }
    
        return request;
       }
    }

    fetchData();



    return () => {
    isSubscribed = false;
      }
}, [stateLocation.regionCode])
    

return [covidData,isLoading,error];
  
}