import React from 'react';
import createWeatherIcons from '../data/weatherIconCreator';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';


const Header = ({city,currentWeather,current,today,region}) => {
 
  const toggleMenu = () => {
    alert('toggle');
  }




  if(!today){
      return <p>....loading</p>
  } else {

          return(
        <header className="currentConditions padding--md">
        


         {/* City chooser */}
        <section className="currentConditions__top z-index--10">

        <button onClick={toggleMenu} className="weather-button weather-button--clear">
        <MenuIcon fontSize="large"/>
        </button>

        <p>
          {city}, {region} <br/>
        </p>

        <button onClick={toggleMenu} className="weather-button weather-button--clear">
        <AddIcon fontSize="large"/>
        </button>
      
        </section>


      <section className="currentConditions__forecast position--relative z-index--10">
      <span className="currentConditions__icon"> 
      {createWeatherIcons(current.weather[0].id)}
      </span>
        
        
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
      </section>
    

       </header>

   
     );
  }
 }



export default Header;