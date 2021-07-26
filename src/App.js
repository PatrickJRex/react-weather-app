import React, {useState} from 'react';
import './assets/weather-icons.min.css';
import './App.scss';
import {FetchLocation} from './hooks/fetchLocationData';
import uuid from 'react-uuid';
import WeatherView from './weather/WeatherView';
import Nav from './components/Nav';
import LocationSearch from './components/LocationSearch';
import LocationsList from './components/LocationsList';


  const App = () => {

    const [region,regionCode,city,lat,lng] = FetchLocation();
    const [search,setSearch] = useState(false);
    const [showLocations,setShowLocations] = useState(false);

    const locations = JSON.parse(localStorage.getItem('locations'));


    if(locations != null && locations.length > 1){
      console.log('using locations')
      return(
    <div className={search || showLocations ? "App Search-Enabled" : "App"}>
    {search && <LocationSearch setSearch={setSearch} />}
    <Nav setShowLocations={setShowLocations} setSearch={setSearch} region={region} city={city} />
    {showLocations && <LocationsList setSearch={setSearch} setShowLocations={setShowLocations} />}
    {locations?.map((local)=>
    <WeatherView regionCode={local.regionCode} city={local.city} region={local.region} key={local.key} uid={local.key} latitude={local.latitude} longitude={local.longitude} />

    )}
    </div>  
      )
    } else {

      return(
        <div className={search || showLocations ? "App Search-Enabled" : "App"}>
        {search && <LocationSearch setSearch={setSearch} />}
         {showLocations && <LocationsList setSearch={setSearch} setShowLocations={setShowLocations} />}
         <Nav setShowLocations={setShowLocations} setSearch={setSearch} region={region} city={city} />
         <WeatherView city={city} regionCode={regionCode} region={region} latitude={lat} uid={uuid()} longitude={lng} />

        </div>
      );
      }
     

    
  }

export default App;
