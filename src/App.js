import React, {useState} from 'react';
import './App.scss';
import {FetchLocation} from './hooks/fetchLocationData';
import WeatherView from './weather/WeatherView';
import Nav from './components/Nav';
import LocationSearch from './components/LocationSearch';
import LocationsList from './components/LocationsList';
import { useSelector } from 'react-redux'
import {selectLocation} from './features/locations/locationSlice';

  const App = () => {

    FetchLocation();
    const [search,setSearch] = useState(false);
    const [showLocations,setShowLocations] = useState(false);
    const stateLocation = useSelector(selectLocation);



      return(
        <div className={search || showLocations ? "App Search-Enabled" : "App"}>
        {search && <LocationSearch setSearch={setSearch} />}
         {showLocations && <LocationsList setSearch={setSearch} setShowLocations={setShowLocations} />}
         <Nav setShowLocations={setShowLocations} setSearch={setSearch} region={stateLocation.region} city={stateLocation.city} />
         <WeatherView city={stateLocation.city} regionCode={stateLocation.regionCode} region={stateLocation.region} latitude={stateLocation.lat} uid={stateLocation.id} longitude={stateLocation.lng} />

        </div>
      );
      
     

    
  }

export default App;
