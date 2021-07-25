import React from 'react';
import './assets/weather-icons.min.css';
import './App.scss';
import WeatherView from './weather/WeatherView';
import {FetchLocation} from './hooks/fetchLocationData';
import uuid from 'react-uuid';




  

  // class App extends Component {
  //   constructor(props){
  //    super(props);
      
  //    this.state = {
  //     error:null,
  //     isLoaded:false,
  //     weather:[],
  //     city:[],
  //     hourlyForecast:[],
  //     lat:null,
  //     lng:null,
  //     current:[],
  //     currentWeather:[],
  //     daily:[],
  //     forecast:{},
  //     isSearching:false
  //   }

  //   }

  //   getWeatherByLocation = () => {
 
  //    if(localStorage.getItem('location-data')){
       
  //       const localData = JSON.parse(localStorage.getItem('location-data'));
       
  //       this.setState({
  //         city:localData.city,
  //         lat:localData.latitude,
  //         lng:localData.longitude,
  //         region:localData.region,
  //         regionCode:localData.region_code
  //       });

       

  //       this.fetchWeatherData(localData.latitude,localData.longitude);



  //     } else {
    
  //       this.fetchIpData();

  //     }



  //   }

  //   fetchIpData = () => {
  //     fetch(`${ipDataApi.base}?api-key=${ipDataApi.key}`)
  //     .then((data)=> data.json())
  //     .then((res)=> {
        
  //       console.log(res)
  //       this.setState({
  //         city:res.city,
  //         lat:res.latitude,
  //         lng:res.longitude,
  //         region:res.region_code

  //       })
        
  //       localStorage.setItem('location-data', JSON.stringify(res));
        
  //       this.fetchWeatherData(this.state.lat,this.state.lng);
  //     })
  //     .catch((err)=>{
  //       console.log(err);
  //     })
  //   }

  //   init(){
  
  
  //   this.getWeatherByLocation();
   


  //   }



  //   fetchWeatherData(lat,lng){
  //     fetch(`${weatherApi.base}/onecall?lat=${lat}&lon=${lng}&appid=${weatherApi.key}&units=imperial`)
  //     .then(res=>res.json())
  //     .then(

  //       (data)=>{
  //         this.setState({
  //           current:data.current,
  //           currentWeather:data.current.weather[0],
  //           hourlyForecast:data.hourly.slice(0,24),
  //           daily:data.daily.slice(1,8),
  //           today:data.daily,
  //           isLoaded:true,
  //           forecast:data
  //         });

  //         this.appBackground = {
  //           backgroundImage: `url(https://source.unsplash.com/weather,${data.current.weather[0].main})`
     
  //        }

  //       }
       
  //     )
  //     .catch((err)=>{
  //       console.log(err);
  //     })

  //     fetch(`${weatherApi.base}/weather?lat=${lat}&lon=${lng}&appid=${weatherApi.key}`)
  //     .then(res=>res.json())
  //     .then(
  //     (data)=>{
  //       this.setState({
  //         city:data.name
  //       })
  //     }
  //     )
  //     .catch((err)=>{
  //       console.log(err);
  //     })

  //   }
  
  
      
    
    


  //   componentDidMount(){
  //     this.init();

  //   }
  


  //   render() {
  //     const { region,regionCode, current, daily, today, hourlyForecast,currentWeather } = this.state;
 

  //     if(!this.state.isLoaded){
  //       return (
  //         <div className="App-Loading-State">
  //          <div className="App-Loading-State__content">
  //          <img src={loadingImage} className="App-Loading-State__img" alt="loading state"/>
  //           <p>Loading...</p>
  //          </div>
  //         </div>
  //       );
        
  //     } else {
  //       return (
  //         <div className="App">
  //           <LocationSearch/>
  //           <DynamicBackground currentWeather={currentWeather}/>
  //         </div>
  //         );
  //     }
   
  //   }
  //  }

  const App = () => {
    const [region,regionCode,city,lat,lng] = FetchLocation();
    const locations = [
      {
        region_code:"NJ",
        region:"New Jersey",
        city:"Hoboken",
        latitude:40.745255,
        longitude:-74.034775,
        
      },
      {
        region_code:"CA",
        region:"Califorina",
        city:"Port Huene",
        latitude:34.155834,
        longitude:-119.202789,
        
      },
      {
        region_code:"NY",
        region:"New York",
        city:"Jamestown",
        latitude:42.095554,
        longitude:-79.238609,
        
      }
    ]

    if(locations.length > 1){
      return(
    <div className="App">
    {locations?.map((local)=>
    <WeatherView key={uuid()} latitude={local.latitude} longitude={local.longitude} />

    )}
    </div>  
      )
    } else {

      return(
        <div className="App">
         <WeatherView  latitude={lat} longitude={lng} />

        </div>
      );
      }
     

    
  }

export default App;
