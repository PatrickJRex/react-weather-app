import { useState, useEffect } from 'react';
import axios from 'axios';


export const FetchCases = (url) => {

 const [data, setData] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 const [error,setError] = useState(null);


  useEffect(() => {
    axios.get(url)
    .then(({ data })=>{
      console.log(data);
      setData(data.actuals);
      setIsLoading(false);
    })
    .catch(()=>{
      setError("an error has occurred");
    })
  },[url]);

 return [data,isLoading,error];

};

