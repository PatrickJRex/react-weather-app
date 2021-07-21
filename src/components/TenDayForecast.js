import React from 'react';
import moment from 'moment';
import createWeatherIcons from '../data/weatherIconCreator';


const TenDayForecast = ({daily}) => {
    if(!daily){
        return <p>...loading</p>
    } else {
    return(
        <section className="nextTenDaysForecast">
        <menu className="nextTenDaysForecast__list">
            {daily.map((item,index) => 
              <div className="nextTenDaysForecast__item" key={index}> 
              <h5 className="nextTenDaysForecast__date">
                  {moment.unix(item.dt).format("dddd")}
              </h5>
                 
                 
                  <h4 className="nextTenDaysForecast__mainForecast">
                    {createWeatherIcons(item.weather[0].id)}
                  </h4> 
                 
                 <section className="nextTenDaysForecast__hiLo">
                 <h5 className="nextTenDaysForecast__high">{Math.round(item.temp.max)}</h5>
                  <h5 className="nextTenDaysForecast__low">{Math.round(item.temp.min)}</h5>
                 </section>
          
                  </div>
            )}
        </menu>
        
      </section>
    );
    }
}

export default TenDayForecast;