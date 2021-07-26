import { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';




export const FetchWeatherData = (lat,lng) => {



    const [error,setError] = useState(null);
    const [hourlyForecast,setHourlyForecast] = useState();
    const [current,setCurrent] = useState([]);
    const [currentWeather,setCurrentWeather] = useState([]);
    const [daily,setDaily] = useState([]);
    const [forecastId, setForecastId] = useState(null);
    const [today,setToday] = useState(null);

    const weatherApi = {
        key:process.env.REACT_APP_WEATHER_API_KEY,
        base:"https://api.openweathermap.org/data/2.5/"
      }


    const url = `${weatherApi.base}/onecall?lat=${lat}&lon=${lng}&appid=${weatherApi.key}&units=imperial`;

    useEffect(() => {
        let isSubscribed = true;


  


        if(lat != null && lng != null){
        axios.get(url)
        .then(({data})=>{
           
            if(isSubscribed){
                setError("no error");
                setCurrent(data.current);
                setCurrentWeather(data.current.weather[0]);
                setHourlyForecast(data.hourly.slice(0,24));
                setDaily(data.daily);
                setToday(data.daily[0])
                setForecastId(uuid());

            }

        })
        .catch(()=>{
            setError("There was an error");
        })

    }

        return () => (isSubscribed = false)

    }, [url,lat,lng])
    



    return [error,hourlyForecast,current,currentWeather,daily,today,forecastId];

    



};

