import React from 'react';
import moment from 'moment';

function DynamicBackground({currentWeather}) {
      
   let imageSrc = {
       base:`https://source.unsplash.com/1600x900/?weather,${currentWeather.main}`,
       param:'clouds'
   }

   let time = '';

   if(moment().hour() < 16){
    time = 'night'
   } else {
       time = 'day'
   }

 
    return (
        <div className="DynamicBackground" data-time={time}>
            <img src={imageSrc.base} className="DynamicBackground__image" alt="weather background" />
        </div>
    )
}

export default DynamicBackground
