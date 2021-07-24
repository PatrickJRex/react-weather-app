import React from 'react'

function LocationSearch() {
    return (
        <div className="LocationSearch">
          <header className="LocationSearch__header">
          <form className="LocationSearch__form">
                <label>Enter city or zip code</label>
                <section className="LocationSearch__form__input-area">
                <input type="text"  placeholder="search for a location"/>
                <button className="weather-button weather-button--clear">
                    <p>Cancel</p>
                </button>
                </section>
            </form>
          </header>
            <div className="LocationSearch__results">

            </div>
        </div>
    )
}

export default LocationSearch
