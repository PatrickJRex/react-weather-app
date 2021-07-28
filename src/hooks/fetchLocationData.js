import {useEffect, useState} from 'react';
import { Location } from '../models/Location';
import uuid from 'react-uuid';

export const FetchLocation = () => {
const [region, setRegion] = useState(null);
const [regionCode, setRegionCode] = useState(null);
const [city, setCity] = useState(null);
const [lat,setLat] = useState(null);
const [lng,setLng] = useState(null);

// todo refactor these states into a single object 
const [location,setLocation] = useState({});



useEffect(() => {
  const locationData = JSON.parse(localStorage.getItem('location-data'));


  const ipDataApi = {
    base:"https://api.ipdata.co/",
    key:process.env.REACT_APP_IP_DATA_KEY
  }

   if(locationData){
      setRegion(locationData.region);
      setRegionCode(locationData.region_code);
      setCity(locationData.city);
      setLat(locationData.latitude);
      setLng(locationData.longitude);

      setLocation({
        region:locationData.region,
        regionCode:locationData.region_code,
        city:locationData.city,
        lat:locationData.latitude,
        lng:locationData.longitude
      })

   } else {

    let isSubscribed = true;

    fetch(`${ipDataApi.base}?api-key=${ipDataApi.key}`)
        .then((data)=> data.json())
        .then((res)=> {

          if(isSubscribed){
        
          
          setRegion(res.region);
          setRegionCode(res.region_code);
          setCity(res.city);
          setLat(res.latitude);
          setLng(res.longitude);

          setLocation({
            region:res.region,
            regionCode:res.region_code,
            city:res.city,
            lat:res.latitude,
            lng:res.longitude
          })


          localStorage.setItem('location-data', JSON.stringify(res));
       
          let location = new Location(res.region_code,res.region,res.city,res.latitude,res.longitude,uuid());
        
          if(!localStorage.getItem('locations')){
            localStorage.setItem('locations',JSON.stringify(location));
          } else {
          
          }

    

        }
        })
            .catch((err)=>{
              console.log(err);
            })

            return () => (isSubscribed = false)
          
   
}

}, []);

return [region,regionCode,city,lat,lng,location];

}