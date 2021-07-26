import React, {useState } from 'react';
import axios from 'axios';

const LocationSearch = ({setSearch}) => {


    const [results, setResults] = useState([]);
   
    const searchLocations = (evt) => {
      const value = evt.target.value; 
     
       if(value.length < 3){
       } else {
           getSuggestions(value);
       }

     }
     
     


     


     const getLocations = (evt) => {

       
        const id = evt.target.getAttribute('data-key');
        const getDetailsUrl = 'https://geocoder.ls.hereapi.com/6.2/geocode.json';

        const params = '?' + 
        'locationid=' + id + 
        '&jsonattributes=1' +        
        '&apikey=' + process.env.REACT_APP_HERE_KEY;

        axios.get(getDetailsUrl + params)
        .then((data)=>{
            // const locationDetails = data.data.response.view[0].result[0].location;

        //    const searchResult = {
        //     city: locationDetails.address.city,
        //     key: uuid(),
        //     latitude: locationDetails.displayPosition.latitude,
        //     longitude: locationDetails.displayPosition.longitude,
        //     region: locationDetails.address.state,
        //     regionCode: locationDetails.address.additionalData[1].value
        //    }


            clearForm();
        })

        .catch(()=>{
            console.log("there was an error");
        }
        )




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
            setResults(data.data.suggestions);
        });
     }

     const clearForm = (evt) => {
        setResults([]);
        setSearch(false);
      
     }

     

  

    return (
        <div className="LocationSearch">
          <header className="LocationSearch__header">
          <form className="LocationSearch__form">
                <label>Add a new location</label>
                <section className="LocationSearch__form__input-area">
                <div className="input-container">
               <i className="fa fa-search"></i>
                <input type="search" autoFocus  onChange={searchLocations} placeholder="Enter the city or zip"/>
                </div>
                <button onClick={clearForm} className="weather-button weather-button--clear">
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
