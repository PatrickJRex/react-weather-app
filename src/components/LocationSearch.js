import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FetchWeatherData } from '../hooks/fetchWeatherData';

const LocationSearch = () => {


    const [searchTerm, setsearchTerm] = useState([]);
    const [results, setResults] = useState([]);
    
    const searchLocations = (evt) => {
      const value = evt.target.value; 
     
       if(value.length < 3){
           setsearchTerm("No results found.");
       } else {
           setsearchTerm(value);
           getSuggestions(value);
       }

     }
     
     

     const [error,weather,hourlyForecast,current,currentWeather,daily,forecast] = FetchWeatherData(40.781,-76.2301);

     


     const getLocations = (evt) => {
        const id = evt.target.getAttribute('data-key');
        const getDetailsUrl = 'https://geocoder.ls.hereapi.com/6.2/geocode.json';

        const params = '?' + 
        'locationid=' + id + 
        '&jsonattributes=1' +        
        '&apikey=' + process.env.REACT_APP_HERE_KEY;

        axios.get(getDetailsUrl + params)
        .then((data)=>{
            let coords = data.data.response.view[0].result[0].location.displayPosition;

           
            clearForm();
        })

     }

  

     const getSuggestions = (terms)=> {
        const autoCompleteUrl = 'https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json';

        const params = '?' +
        'query=' +  encodeURIComponent(terms) +   // The search text which is the basis of the query
        '&maxresults=10' +  // The upper limit the for number of suggestions to be included
        // in the response.  Default is set to 5.

        '&apikey=' + process.env.REACT_APP_HERE_KEY;
        axios.get(autoCompleteUrl + params)
        .then((data)=>{
            console.log(data.data.suggestions);
            setResults(data.data.suggestions);
        });
     }

     const clearForm = (evt) => {
        setsearchTerm([]);
        setResults([]);
        evt.target.value = '';
     }

  

    return (
        <div className="LocationSearch">
          <header className="LocationSearch__header">
          <form className="LocationSearch__form">
                <label>Enter city or zip code</label>
                <section className="LocationSearch__form__input-area">
                <div className="input-container">
               <i className="fa fa-search"></i>
                <input type="text" autoFocus  onChange={searchLocations} placeholder="search for a location"/>
                </div>
                <button className="weather-button weather-button--clear">
                    <p>Cancel</p>
                </button>
                </section>
            </form>
          </header>
            <div className="LocationSearch__results">
               {results?.map((result,index)=>
                 <div className="LocationSearch__results__list" data-key={result.locationId} onClick={getLocations} key={result.locationId}>
                     <p>
                     {result.address.city}, {result.address.state} {result.address.country}
                     </p>
                </div>
               )}
            </div>
        </div>
    )
}

export default LocationSearch
