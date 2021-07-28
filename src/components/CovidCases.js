import React from 'react';
import moment from 'moment';
import { FetchCovidData } from '../hooks/fetchCovidData';
import { useSelector } from 'react-redux';
import { selectLocation } from '../features/locations/locationSlice';


const CovidCases = () => {
  const stateLocation = useSelector(selectLocation);


const [covidData,isLoading,error] = FetchCovidData();

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
       <br />
       {error && <div>{error}</div>}
      
    
     <section className="CovidCases__case">


   
       <h5 className="h5">
           {stateLocation.region}
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
