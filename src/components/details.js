
import React from 'react';
import moment from 'moment';

function Details({current}){

    if(!current){
        return 
    }
else {
    return(
        <div className="details position--relative z-index--10 padding--md">
            <p className="">Details</p>
            <br></br>
            <div className="details__row">
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-sunrise"></i>SUNRISE</p>
                    <p className="h5"> {moment.unix(current.sunrise).format("LT")}</p>
                </section>
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-sunset"></i>SUNSET</p>
                    <p className="h5">{moment.unix(current.sunset).format("LT")}</p>
                </section>
            </div>

            <div className="details__row">
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-raindrop"></i>DEW POINT</p>
                    <p className="h5">{current.dew_point}</p>
                </section>
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-humidity"></i>HUMIDITY</p>
                    <p className="h5">{current.humidity}%</p>
                </section>
            </div>

            <div className="details__row">
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-strong-wind"></i>WIND Speed</p>
                    <p className="h5">{Math.round(current.wind_speed)}<small>mph</small></p>
                </section>
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-thermometer"></i>FEELS LIKE</p>
                    <p className="h5">{Math.round(current.feels_like)}<sup>&deg;</sup></p>
                </section>
            </div>

            <div className="details__row">
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-barometer"></i> Pressure</p>
                    <p className="h5">{Math.round(current.pressure)}<small>hPa</small></p>
                </section>
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-cloud"></i> Clouds</p>
                    <p className="h5">{Math.round(current.clouds)}<sup>%</sup></p>
                </section>
            </div>

            <div className="details__row">
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-dust"></i> Visibility</p>
                        <p className="h5">{current.visibility}</p>
                </section>
                <section className="details__item">
                    <p className="details__item__icon"><i className="wi wi-horizon-alt"></i> UV Index</p>
                    <p className="h5">{current.uvi}</p>
                </section>

            </div>
        </div>
    )
}
}

export default Details;