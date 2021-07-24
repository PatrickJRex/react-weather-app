import React, {useState} from 'react';
import moment from 'moment';
import createWeatherIcons from '../data/weatherIconCreator';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const TenDayForecast = ({daily}) => {

  const [selected,setSelected] = useState([]);

  const toggleActive = (index) => {
    if(selected === index){
      setSelected([]);
    } else {
      setSelected(index);

    }
  }

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
              
              <div className={selected === index ? "nextTenDaysForecast__item active" : "nextTenDaysForecast__item"} data-index={index} onClick={toggleActive.bind(this,index)} key={index}> 

              <header className="nextTenDaysForecast__item__header">
              <button className="weather-button weather-button--clear">
                <KeyboardArrowDownIcon fontSize="medium"/>
              </button>

              <p className="nextTenDaysForecast__date h5">
                  {moment.unix(item.dt).format("dddd")}
              </p>
                 
                 
        
                 <p className="nextTenDaysForecast__icon h5">
                    {createWeatherIcons(item.weather[0].id)}
                  </p> 

                  <section className="nextTenDaysForecast__hiLo">
                 <p className="nextTenDaysForecast__high h5">{Math.round(item.temp.max)}&deg;</p>
                 <p className="nextTenDaysForecast__low h5">{Math.round(item.temp.min)}&deg;</p>
                 </section>
              </header>
          
                 {/* Details */}
                 <div className={selected === index ? "nextTenDaysForecast__details active" : "nextTenDaysForecast__details"}>


                <ul className="nextTenDaysForecast__details__temps">
                <li className="nextTenDaysForecast__temps-item">
                <i className="wi wi-sunrise h3"></i>

                  <p>Morning</p>
                  <h5>{Math.round(item.temp.morn)}&deg;</h5>
                 </li>
                 <li className="nextTenDaysForecast__temps-item">
                 <i className="wi wi-day-sunny h3"></i>

                  <p>Day</p>
                  <h5>{Math.round(item.temp.day)}&deg;</h5>
                 </li>
                 <li className="nextTenDaysForecast__temps-item">
                 <i className="wi wi-sunset h3"></i>

                  <p>Evening</p>
                  <h5>{Math.round(item.temp.eve)}&deg;</h5>
                 </li>
                 <li className="nextTenDaysForecast__temps-item">
                 <i className="wi wi-night-alt-cloudy h3"></i>

                  <p>Night</p>
                  <h5>{Math.round(item.temp.night)}&deg;</h5>
                 </li>
                </ul>

                  {/* Special Details */}
                  <ul className="nextTenDaysForecast__details__grid">
                   
                   <li className="nextTenDaysForecast__grid-item">
                    <p>
                    <i className="wi wi-wu-sunny"></i>
                     <span>{Math.round(item.uvi)}</span>
                    </p>
                   </li>

                   <li className="nextTenDaysForecast__grid-item">
                   <p>
                   <i className="wi wi-sunrise"></i>
                   <span>  {moment.unix(item.sunrise).format("LT")}</span>
                   </p>
                   </li>

                   <li className="nextTenDaysForecast__grid-item">
                   <p>
                   <i className="wi wi-sunset"></i>
                    <span> {moment.unix(item.sunset).format("LT")}</span>
                   </p>
                   </li>

                   <li className="nextTenDaysForecast__grid-item">
                   <p>
                   <i className="wi wi-rain"></i>
                    <span>{item.rain ? Math.round(item.rain) : "0"}%</span>
                   </p>
                   </li>

                   <li className="nextTenDaysForecast__grid-item">
                   <p>
                   <i className="wi wi-humidity"></i>
                   <span> {item.humidity}%</span>
                   </p>
                   </li>


                   <li className="nextTenDaysForecast__grid-item">
                   <p>
                   <i className="wi wi-strong-wind"></i>
                   <span> {item.wind_speed}mph</span>
                   </p>
                   </li>

                  </ul>
                  
              
                  

                   </div>

                  </div>
            )}
        </div>
        
      </section>
    );
    }
}

export default TenDayForecast;