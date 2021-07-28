import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Nav = ({region,city,setSearch,setShowLocations}) => {

const toggleSearch = () => {
    setSearch(true);
}



    return (
        <section className="Nav position--absolute z-index--10">

        {/* <button  className="weather-button weather-button--clear">
        <MenuIcon onClick={toggleNav} fontSize="large"/>
        </button> */}

        <p className="h5">
          {city}, {region} <br/>
        </p>

        <button className="weather-button weather-button--clear">
        <LocationOnIcon onClick={toggleSearch} fontSize="large"/>
        </button>
      
        </section>
    )
}

export default Nav
