import {useEffect, useState} from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addlocation } from '../features/locations/locationSlice';


export const FetchLocation = () => {
const [region, setRegion] = useState(null);
const [regionCode, setRegionCode] = useState(null);
const [city, setCity] = useState(null);
const [lat,setLat] = useState(null);
const [lng,setLng] = useState(null);
const dispatch = useDispatch();



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

    
      dispatch(addlocation({
        region:locationData.region,
        regionCode:locationData.regionCode,
        city:locationData.city,
        lat:locationData.lat,
        lng:locationData.lat,
        id:uuid()

      }));

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

       


       
          // let location = new Location(res.region_code,res.region,res.city,res.latitude,res.longitude,uuid());
        
          dispatch(addlocation({
            region:res.region,
            regionCode:res.region_code,
            city:res.city,
            lat:res.latitude,
            lng:res.longitude,
            id:uuid()

          }));
    

        }
        })
            .catch((err)=>{
              console.log(err);
            })

            return () => (isSubscribed = false)


          }

          
   


}, [dispatch]);

return [region,regionCode,city,lat,lng];

}