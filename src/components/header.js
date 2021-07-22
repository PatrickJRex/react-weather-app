import React, {useState, useEffect} from 'react';
import moment from 'moment';

import createWeatherIcons from '../data/weatherIconCreator';


const Header = ({city,currentWeather,current,today}) => {
 
let curTime = moment().format("LT");

const [time, setTime] = useState(curTime);

useEffect(() => {
  const interval = setInterval(() => {
   setTime(moment().format("LT"));
   console.log(curTime);
  }, 60000);
  return () => clearInterval(interval);
}, [curTime]);


  if(!today){
      return <p>....loading</p>
  } else {

          return(
        <header className="currentConditions padding--md">
        


         {/* City chooser */}
        <section className="currentConditions__top z-index--10">
        <p className="currentConditions__city h5">{city}</p>
        <p className="h5">{ time }</p>
        </section>
        <span className="currentConditions__icon"> {createWeatherIcons(today[0].weather[0].id)}</span>
        
        <p className="currentConditions__main text-transform-capitalize">{currentWeather.description}</p>
        
        <h2 className="currentConditions__temp h1">{Math.round(current.temp)}<sup>&deg;</sup></h2>

        <div className="currentConditions__overall">
          {/* <h4 className="h5">H:{Math.round(today[0].temp.max)}<sup>&deg;</sup></h4>
          <h4 className="h5">L:{Math.round(today[0].temp.min)}<sup>&deg;</sup></h4> */}
          <h4 className="h5">
          <i className="wi wi-strong-wind"></i>
          {current.wind_speed}/mph</h4>
          <h4 className="h5">
          <i className="wi wi-humidity"></i>
  
          {current.humidity}%</h4>

        </div>
       </header>

   
     );
  }
 }



export default Header;