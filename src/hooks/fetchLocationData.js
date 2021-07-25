import {useEffect, useState} from 'react';


export const FetchLocation = () => {

const [region, setRegion] = useState(null);
const [regionCode, setRegionCode] = useState(null);
const [city, setCity] = useState(null);
const locationData = JSON.parse(localStorage.getItem('location-data'));
const [lat,setLat] = useState(null);
const [lng,setLng] = useState(null);


const ipDataApi = {
    base:"https://api.ipdata.co/",
    key:process.env.REACT_APP_IP_DATA_KEY
  }

useEffect(() => {


   if(locationData){
      setRegion(locationData.region);
      setRegionCode(locationData.region_code);
      setCity(locationData.city)
      setLat(locationData.latitude)
      setLng(locationData.longitude)
   } else {

    let isSubscribed = true;

    fetch(`${ipDataApi.base}?api-key=${ipDataApi.key}`)
        .then((data)=> data.json())
        .then((res)=> {

          if(isSubscribed){
          
          console.log(res)
          this.setState({
            city:res.city,
            lat:res.latitude,
            lng:res.longitude,
            region:res.region_code
  
          })
          
          localStorage.setItem('location-data', JSON.stringify(res));
        }
        })
            .catch((err)=>{
              console.log(err);
            })

            return () => (isSubscribed = false)
          
   
}

}, [ipDataApi,locationData]);

return [region,regionCode,city,lat,lng];

}