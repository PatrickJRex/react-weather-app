import React, {useEffect, useState} from 'react'

function CovidCases({region,regionCode}) {

   const covidApi = {
       base: `https://api.covidactnow.org/v2/state/${regionCode}.json?apiKey=`,
       key: process.env.REACT_APP_COVID_DATA_KEY
   }
    
   const url = covidApi.base.key; 
   const [covid, setCases] = useState([]);
   
   const fetchCases = (url) => {
    fetch(url)
    .then((data)=> data.json())
    .then((res)=>{
       setCases(res.actuals);
    })
   
   }

    useEffect(() => {
       fetchCases(url);
    });

    return (
        <div className="position--relative z-index--10 padding--md">
         <h5 className="h5">Latest Coronavirus Updates</h5>
         <br/>

        <div className="CovidCases__case">
        <header className="CovidCases__heading">
        <h5>{region}</h5>
        <h5>Total</h5>
        </header>
        <section>
        
         <ul className="CovidCases__listing">
            <li className="CovidCases__listing__item">
             <p>Current cases </p>
             <p>{covid.cases}</p>
             </li>
            <li className="CovidCases__listing__item">
             <p>New cases </p>
             <p>{covid.newCases}</p>
             </li>
            <li className="CovidCases__listing__item">
             <p>Negative tests</p>
             <p>{covid.negativeTests}</p>
             </li>
            <li className="CovidCases__listing__item">
             <p>Positive tests </p>
             <p>{covid.positiveTests}</p>
             </li>
            <li className="CovidCases__listing__item">
             <p>Vaccines administered</p>
             <p>{covid.vaccinesAdministered}</p>
             </li>
            <li className="CovidCases__listing__item">
             <p>Deaths</p>
             <p>{covid.deaths}</p>
             </li>
            <li className="CovidCases__listing__item">
             <p>New Deaths</p>
             <p>{covid.newDeaths}</p>
             </li>
         </ul>
        </section>
        </div>

       
        
        </div>
    )
}

export default CovidCases
