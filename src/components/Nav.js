import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';


const Nav = ({region,city,setSearch,setShowLocations}) => {

const toggleSearch = () => {
    setSearch(true);
}

const toggleNav = () => {
    setShowLocations(true);
    
}

    return (
        <section className="Nav position--absolute z-index--10">

        <button  className="weather-button weather-button--clear">
        <MenuIcon onClick={toggleNav} fontSize="large"/>
        </button>

        <p className="h5">
          {city}, {region} <br/>
        </p>

        <button className="weather-button weather-button--clear">
        <AddIcon onClick={toggleSearch} fontSize="large"/>
        </button>
      
        </section>
    )
}

export default Nav
