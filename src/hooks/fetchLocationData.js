import {useEffect, useState} from 'react';
import { Location } from '../models/Location';
import uuid from 'react-uuid';

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
      setCity(locationData.city);
      setLat(locationData.latitude);
      setLng(locationData.longitude);

      // let location = new Location(locationData.region_code,locationData.region,locationData.city,locationData.latitude,locationData.longitude,uuid());
      
    // if(localStorage.getItem('locations')){
    //     let oldLocations = localStorage.getItem('locations');
        
    //     // oldLocations.push(location);
        
    //     localStorage.setItem('locations',JSON.stringify(oldLocations));
         
    // }


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


          localStorage.setItem('location-data', JSON.stringify(res));
       
          let location = new Location(res.region_code,res.region,res.city,res.latitude,res.longitude,uuid());
        
          if(!localStorage.getItem('locations')){
            localStorage.setItem('locations',JSON.stringify(location));
          } else {
          
          }

        //   if(localStorage.getItem('locations')){
        //     let oldLocations = JSON.parse(localStorage.getItem('locations'));
        //     oldLocations.push(location);
            
        //     localStorage.setItem('locations',JSON.stringify(oldLocations));
             
        // }

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