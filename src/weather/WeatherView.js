import React from 'react'
// get parts
import Header from '../components/header';
import TodaysForecast from '../components/todaysForecast';
import TenDayForecast from '../components/TenDayForecast';
import Details from '../components/details';
import {FetchWeatherData} from '../hooks/fetchWeatherData';
import {FetchLocation} from '../hooks/fetchLocationData';

// get image
import loadingImage from '../assets/App Icon - 120x120.svg';
import DynamicBackground from '../components/DynamicBackground';
import CovidCases from '../components/CovidCases';




function WeatherView({latitude,longitude}) {
const [region,regionCode,city,lat,lng] = FetchLocation();

const [error,weather,hourlyForecast,current,currentWeather,daily,today] = FetchWeatherData(latitude,longitude);


  
if(!today){
    return (
     <div className="App-Loading-State">
     <div className="App-Loading-State__content">
     <img src={loadingImage} className="App-Loading-State__img" alt="loading state"/>
     <p>Loading...</p>
     </div>
   </div>
    );
  } else {
    return (
        <div>
         {error && <div>{error}</div>}
         <Header region={region} current={current} today={today} currentWeather={currentWeather} city={city}/>
         <TodaysForecast hourlyForecast={hourlyForecast} today={today} current={current}/>
         <TenDayForecast daily={daily}/>
         <CovidCases region={region} regionCode={regionCode} />
         <Details current={current} />
         <DynamicBackground currentWeather={currentWeather}/>
        </div>
    )
  }
}

export default WeatherView
