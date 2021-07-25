import React from 'react';
import './assets/weather-icons.min.css';
import './App.scss';
import WeatherView from './weather/WeatherView';
import {FetchLocation} from './hooks/fetchLocationData';
import uuid from 'react-uuid';


  const App = () => {
    const [region,regionCode,city,lat,lng] = FetchLocation();
    

    const locations = [
      {
        region_code:"NJ",
        region:"New Jersey",
        city:"Hoboken",
        latitude:40.745255,
        longitude:-74.034775,
        key: uuid()
        
      },
      {
        region_code:"CA",
        region:"Califorina",
        city:"Port Huene",
        latitude:34.155834,
        longitude:-119.202789,
        key: uuid()

        
      },
      {
        region_code:"NY",
        region:"New York",
        city:"Jamestown",
        latitude:42.095554,
        longitude:-79.238609,
        key: uuid()
 
        
      }
    ]

    if(locations.length >= 1){
      return(
    <div className="App">
    {locations?.map((local)=>
    <WeatherView regionCode={local.region_code} city={local.city} region={local.region} key={local.key} uid={local.key} latitude={local.latitude} longitude={local.longitude} />

    )}
    </div>  
      )
    } else {

      return(
        <div className="App">
         
         <WeatherView city={city} regionCode={regionCode} region={region} latitude={lat} uid={uuid()} longitude={lng} />

        </div>
      );
      }
     

    
  }

export default App;
