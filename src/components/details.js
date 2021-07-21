
import React from 'react';
import moment from 'moment';

function Details({current}){

    if(!current){
        return 
    }
else {
    return(
        <div className="details">
            <div className="details__row">
                <section className="details__item">
                    <h6><i className="wi wi-sunrise"></i>SUNRISE</h6>
                    <h3> {moment.unix(current.sunrise).format("h:mm A")}</h3>
                </section>
                <section className="details__item">
                    <h6><i className="wi wi-sunset"></i>SUNSET</h6>
                    <h3> {moment.unix(current.sunset).format("h:mm A")}</h3>
                </section>
            </div>
            <div className="details__row">
                <section className="details__item">
                    <h6><i className="wi wi-raindrop"></i>DEW POINT</h6>
                    <h3>{current.dew_point}</h3>
                </section>
                <section className="details__item">
                    <h6><i className="wi wi-humidity"></i>HUMIDITY</h6>
                    <h3>{current.humidity}%</h3>
                </section>
            </div>
            <div className="details__row">
                <section className="details__item">
                    <h6><i className="wi wi-strong-wind"></i>WIND Speed</h6>
                    <h3>{Math.round(current.wind_speed)}<small>mph</small></h3>
                </section>
                <section className="details__item">
                    <h6><i className="wi wi-thermometer"></i>FEELS LIKE</h6>
                    <h3>{Math.round(current.feels_like)}<sup>&deg;</sup></h3>
                </section>
            </div>
            <div className="details__row">
                <section className="details__item">
                    <h6>Pressure</h6>
                    <h3>{Math.round(current.pressure)}<small>hPa</small></h3>
                </section>
                <section className="details__item">
                    <h6>clouds</h6>
                    <h3>{Math.round(current.clouds)}<sup>%</sup></h3>
                </section>
            </div>
            <div className="details__row">
                <section className="details__item">
                    <h6>Visibility</h6>
                        <h3>{current.visibility}</h3>
                </section>
                <section className="details__item">
                    <h6>UV INdex</h6>
                    <h3>{current.uvi}</h3>
                </section>

            </div>
        </div>
    )
}
}

export default Details;