import { useState, useEffect } from 'react';
import axios from 'axios';


export const FetchCovidData = (regionCode) => {

const [covidData, setCovidData ] = useState([]);
const [isLoading,setIsLoading] = useState(true);
const [error,setError] = useState(null);

useEffect(() => {
    let isSubscribed = true;
    let url = `https://api.covidactnow.org/v2/state/${regionCode}.json?apiKey=${process.env.REACT_APP_COVID_DATA_KEY}`;
    
     
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
}, [regionCode])
    

return [covidData,isLoading,error];
  
}