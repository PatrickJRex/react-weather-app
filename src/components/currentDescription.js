import React from 'react';

function CurrentDescription({currentWeather,today}){
  
  
 const minTemp = (today) => {
      return Math.round(today[0].temp.min);
   }
   

const maxTemp = (today) => {
   return Math.round(today[0].temp.max);
}



if(!currentWeather || !today){
        return <p>...loading</p>

 } else {

 return(
    <div className="CurrentDescription">
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

