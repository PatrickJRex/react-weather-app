import React from 'react';
import moment from 'moment-timezone';
import SearchIcon from '@material-ui/icons/Search';
import BackspaceIcon from '@material-ui/icons/Backspace';

const testLocations = [
    {
        "city": "Newport News",
        "key": "383337-44fa-0fcb-6df-7382c30f373c",
        "latitude": 37.08358,
        "longitude": -76.48065,
        "region": "VA",
        "regionCode": "Virginia"
    },
    {
        "city": "Summit Hill",
        "key": "0d14637-b2a-1075-07d8-1b78c41fdb",
        "latitude": 40.82449,
        "longitude": -75.86761,
        "region": "PA",
        "regionCode": "Pennsylvania"
    },
    {
        "city": "Jim Thorpe",
        "key": "00885e-d25c-ada8-4152-ac07537fff65",
        "latitude": 40.87387,
        "longitude": -75.73382,
        "region": "PA",
        "regionCode": "Pennsylvania"
    }

];


function LocationsList({setSearch,setShowLocations}) {

    const selectLocation = (evt) => {
        alert(evt.target.dataset.key);
    }

  

    
    const toggleSearch = () => {
        setSearch(true);
        setShowLocations(false);
    }

    return (
        <div className="LocationsList position--absolute z-index--20">
            {testLocations?.map((loc)=>
             <div className="LocationsList__item position--relative" onClick={selectLocation} data-key={loc.key} key={loc.key}>
                <div className="position--relative z-index--20">
                <p>{moment().tz("America").format("LT")}</p><br />
                <h5>{loc.city}</h5>
                </div>
                <img className="LocationsList__item__image position--absolute" alt="nature, weather" src="https://source.unsplash.com/1500x500/?nature,water"/>

             </div>
           )}

           <nav className="LocationsList__nav">
             <button onClick={()=> setShowLocations(false)} className="weather-button weather-button--clear">
                 <BackspaceIcon/>
             </button>
             <button onClick={toggleSearch} className="weather-button weather-button--clear">
             <SearchIcon/>
             </button>
           </nav>
        </div>
    )
}

export default LocationsList
