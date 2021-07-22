
import React from 'react';
import moment from 'moment';

function Details({current}){

    if(!current){
        return 
    }
else {
    return(
        <div className="details position--relative z-index--10 padding--md">
            <h5 className="">Details</h5>
            <br></br>
            <div className="details__row">
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-sunrise"></i>SUNRISE</h6>
                    <h5> {moment.unix(current.sunrise).format("h:mm A")}</h5>
                </section>
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-sunset"></i>SUNSET</h6>
                    <h5> {moment.unix(current.sunset).format("h:mm A")}</h5>
                </section>
            </div>

            <div className="details__row">
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-raindrop"></i>DEW POINT</h6>
                    <h5>{current.dew_point}</h5>
                </section>
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-humidity"></i>HUMIDITY</h6>
                    <h5>{current.humidity}%</h5>
                </section>
            </div>

            <div className="details__row">
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-strong-wind"></i>WIND Speed</h6>
                    <h5>{Math.round(current.wind_speed)}<small>mph</small></h5>
                </section>
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-thermometer"></i>FEELS LIKE</h6>
                    <h5>{Math.round(current.feels_like)}<sup>&deg;</sup></h5>
                </section>
            </div>

            <div className="details__row">
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-barometer"></i> Pressure</h6>
                    <h5>{Math.round(current.pressure)}<small>hPa</small></h5>
                </section>
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-cloud"></i> clouds</h6>
                    <h5>{Math.round(current.clouds)}<sup>%</sup></h5>
                </section>
            </div>

            <div className="details__row">
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-dust"></i> Visibility</h6>
                        <h5>{current.visibility}</h5>
                </section>
                <section className="details__item">
                    <h6 className="details__item__icon"><i className="wi wi-horizon-alt"></i> UV INdex</h6>
                    <h5>{current.uvi}</h5>
                </section>

            </div>
        </div>
    )
}
}

export default Details;