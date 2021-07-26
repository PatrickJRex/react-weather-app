import React from 'react';
import moment from 'moment';
import createWeatherIcons from '../data/weatherIconCreator';

const  TodaysForecast = ({hourlyForecast, current, today}) => {

      
    if(!hourlyForecast && !today){
        return <p>...loading</p>
    } else {

    return(
        <>
    
        <div className="padding--md z-index--10 position--relative">
        <h4 className="h5">Hourly forecast</h4>
        </div>

        <div className="todaysForecast">
        <div className="todaysForecast__item" >
          <span className="todaysForecast__item__time">Now</span>
          <span className="h3 todaysForecast__item__icon">
           {createWeatherIcons(current.weather[0].id)}
          </span> 
          <span className="todaysForecast__item__temp h4">{Math.round(current.temp)}<sup>&deg;</sup></span>
         </div>

        {hourlyForecast.map((item,index) => 

         <div className="todaysForecast__item" key={index}>
          <span className="todaysForecast__item__time">{moment.unix(item.dt).format("LT")}</span>
          <span className="h3 todaysForecast__item__icon"> {createWeatherIcons(item.weather[0].id)}    </span> 
          <span className="todaysForecast__item__temp h4">{Math.round(item.temp)}<sup>&deg;</sup></span>
         </div>
        )}
        </div>

        </>

    );
    }
}

export default TodaysForecast;