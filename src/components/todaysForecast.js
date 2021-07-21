import React from 'react';
import moment from 'moment';
import createWeatherIcons from '../data/weatherIconCreator';

const  TodaysForecast = ({hourlyForecast}) => {


    if(!hourlyForecast){
        return <p>...loading</p>
    } else {

    return(
        <menu className="todaysForecast">
        {hourlyForecast.map((item,index) => 

         <div className="todaysForecast__item" key={index}>
          <span>{moment.unix(item.dt).format("hh A")}</span>
          {createWeatherIcons(item.weather[0].id)}     
          <span className="todaysForecast__item__temp">{Math.round(item.temp)}<sup>&deg;</sup></span>
         </div>
        )}
        </menu>

    );
    }
}

export default TodaysForecast;