import React from 'react';

 function Header({city,currentWeather,current,today}){
 
  if(!today){
      return <p>....loading</p>
  } else {

          return(
        <header className="currentConditions">
        <h1 className="currentConditions__city h3">{city}</h1>
        <p className="currentConditions__type">{currentWeather.main}</p>
        <h2 className="currentConditions__temp h1">{Math.round(current.temp)}<sup>&deg;</sup></h2>
        <div className="currentConditions__overall">
          <h4 className="h5">H:{Math.round(today[0].temp.max)}<sup>&deg;</sup></h4>
          <h4 className="h5">L:{Math.round(today[0].temp.min)}<sup>&deg;</sup></h4>
        </div>
       </header>

   
     );
  }
 }



export default Header;