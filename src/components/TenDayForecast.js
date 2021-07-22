import React from 'react';
import moment from 'moment';
import createWeatherIcons from '../data/weatherIconCreator';


const TenDayForecast = ({daily}) => {
    if(!daily){
        return <p>...loading</p>
    } else {
    return(
        <section className="nextTenDaysForecast position--relative z-index--10 padding--md">
          <div className="">
            <h5 className="h5">Daily Forecast</h5>
          </div>
          <br/>
        <div className="nextTenDaysForecast__list">
            {daily.map((item,index) => 
              
              <div className="nextTenDaysForecast__item" key={index}> 
              <p className="nextTenDaysForecast__date h5">
                  {moment.unix(item.dt).format("dddd")}
              </p>
                 
                 
                 
                 
                 <section className="nextTenDaysForecast__hiLo">
                 <p className="nextTenDaysForecast__high h5">{Math.round(item.temp.max)}&deg;</p>
                 <p className="nextTenDaysForecast__low h5">{Math.round(item.temp.min)}&deg;</p>
                 </section>

                 <p className="nextTenDaysForecast__icon h5">
                    {createWeatherIcons(item.weather[0].id)}
                  </p> 
          
                  </div>
            )}
        </div>
        
      </section>
    );
    }
}

export default TenDayForecast;