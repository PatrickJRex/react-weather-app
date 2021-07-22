import React from 'react';

function CurrentDescription({currentWeather,today}){
  
  

if(!currentWeather || !today){
        return <p>...loading</p>

 } else {

 return(
    <div className="CurrentDescription position--relative z-index--10 padding--md">
       <h5>
        Today: {currentWeather.main} currently. 
        The high will be {Math.round(today[0].temp.max)} <sup>&deg;</sup>.
        Tonight's low will be {Math.round(today[0].temp.min)} <sup>&deg;</sup>.

       </h5>
    </div>
    );
 }
}

export default CurrentDescription;

