import React, {useEffect, useState} from 'react'
import axios from 'axios';
import moment from 'moment';


const CovidCases = ({region,regionCode}) => {



const [isLoading, setIsLoading ] = useState(true);
const [covidData, setCovidData ] = useState([]);
const [error,setError] = useState(null);


useEffect(() => {
    let url = `https://api.covidactnow.org/v2/state/${regionCode}.json?apiKey=${process.env.REACT_APP_COVID_DATA_KEY}`;

   async function fetchData() {
    const request = await axios.get(url);
    setIsLoading(false);
    setCovidData(request.data.actuals);

    if(request == null) {
        setError("request failed");
    }

    return request;
   }

   fetchData();
}, [regionCode]);


if(isLoading){
    return (
        <div className="position--relative z-index--10 padding--md">
        <p> 
            It's loading
       </p>
    </div>

    );
}


const cData = error ? [] : covidData;

return (
    <div className="position--relative z-index--10 padding--md">
       <h5>Latest Coronavirus Data</h5>
       {error && <div>{error}</div>}
      
    
     <section className="CovidCases__case">


   
       <h5 className="h5">
           {region}
       </h5>
       <p>
           Cases for {moment().format("MMMM, DD")}
       </p>


       <ul className="CovidCases__listing"> 
        <li className="CovidCases__item">
          <p className="CovidCases__item__label">Cases</p>
          <p className="CovidCases__item__data-point">{cData.cases}</p>
          <p className="CovidCases__item__uptick">
          <span className="badge badge--yellow">

              +{cData.newCases}
              </span>
              </p>
        </li>

        <li className="CovidCases__item">
          <p className="CovidCases__item__label">Deaths</p>
          <p className="CovidCases__item__data-point">{cData.deaths}</p>
          <p className="CovidCases__item__uptick">
              <span className="badge badge--yellow">
              +{cData.newDeaths}
              </span>
          </p>
        </li>

        <li className="CovidCases__item">
          <p className="CovidCases__item__label">Positive Tests</p>
          <p className="CovidCases__item__data-point">{cData.positiveTests}</p>
        </li>
        <li className="CovidCases__item">
          <p className="CovidCases__item__label">Vaccines Distributed</p>
          <p className="CovidCases__item__data-point">{cData.vaccinesDistributed}</p>
        </li>
        <li className="CovidCases__item">
          <p className="CovidCases__item__label">Vaccines Initiated</p>
          <p className="CovidCases__item__data-point">{cData.vaccinationsInitiated}</p>
        </li>
        <li className="CovidCases__item">
          <p className="CovidCases__item__label">Vaccines Completed</p>
          <p className="CovidCases__item__data-point">{cData.vaccinationsCompleted}</p>
        </li>
       </ul>
       </section>
       

    </div>
);



   

   
   


   
}

export default CovidCases
