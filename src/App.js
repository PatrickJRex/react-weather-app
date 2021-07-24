import React, {Component} from 'react';
import './assets/weather-icons.min.css';
import './App.scss';

// get parts
import Header from './components/header';
import TodaysForecast from './components/todaysForecast';
import TenDayForecast from './components/TenDayForecast';
import Details from './components/details';
import LocationSearch from './components/LocationSearch';

// get image
import loadingImage from './assets/App Icon - 120x120.svg';
import DynamicBackground from './components/DynamicBackground';
import CovidCases from './components/CovidCases';


const weatherApi = {
  key:process.env.REACT_APP_WEATHER_API_KEY,
  base:"https://api.openweathermap.org/data/2.5/"
}

const ipDataApi = {
  base:"https://api.ipdata.co/",
  key:process.env.REACT_APP_IP_DATA_KEY
}



  

  class App extends Component {
    constructor(props){
     super(props);
      
     this.state = {
      error:null,
      isLoaded:false,
      weather:[],
      main:[],
      city:[],
      hourlyForecast:[],
      lat:null,
      lng:null,
      current:[],
      currentWeather:[],
      daily:[],
      forecast:{}
    }

    }

    getWeatherByLocation = () => {
 
     if(localStorage.getItem('location-data')){
       
        const localData = JSON.parse(localStorage.getItem('location-data'));
       
        this.setState({
          city:localData.city,
          lat:localData.latitude,
          lng:localData.longitude,
          region:localData.region,
          regionCode:localData.region_code
        });

       

        this.fetchWeatherData(localData.latitude,localData.longitude);


      } else {
    
        this.fetchIpData();

      }



    }

    fetchIpData = () => {
      fetch(`${ipDataApi.base}?api-key=${ipDataApi.key}`)
      .then((data)=> data.json())
      .then((res)=> {
        
        console.log(res)
        this.setState({
          city:res.city,
          lat:res.latitude,
          lng:res.longitude,
          region:res.region_code

        })
        
        localStorage.setItem('location-data', JSON.stringify(res));
        
        this.fetchWeatherData(this.state.lat,this.state.lng);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    init(){
  
  
    this.getWeatherByLocation();
   


    }



    fetchWeatherData(lat,lng){
      fetch(`${weatherApi.base}/onecall?lat=${lat}&lon=${lng}&appid=${weatherApi.key}&units=imperial`)
      .then(res=>res.json())
      .then(

        (data)=>{
          this.setState({
            current:data.current,
            currentWeather:data.current.weather[0],
            hourlyForecast:data.hourly.slice(0,24),
            daily:data.daily.slice(1,8),
            today:data.daily,
            isLoaded:true,
            forecast:data
          });

          this.appBackground = {
            backgroundImage: `url(https://source.unsplash.com/weather,${data.current.weather[0].main})`
     
         }

        }
       
      )
      .catch((err)=>{
        console.log(err);
      })

      fetch(`${weatherApi.base}/weather?lat=${lat}&lon=${lng}&appid=${weatherApi.key}`)
      .then(res=>res.json())
      .then(
      (data)=>{
        this.setState({
          city:data.name
        })
      }
      )
      .catch((err)=>{
        console.log(err);
      })

    }
  
  
      
    
    


    componentDidMount(){
      this.init();
    }
  


    render() {
      const { region,regionCode, current, daily, today, hourlyForecast,currentWeather } = this.state;
 

      if(!this.state.isLoaded){
        return (
          <div className="App-Loading-State">
           <div className="App-Loading-State__content">
           <img src={loadingImage} className="App-Loading-State__img" alt="loading state"/>
            <p>Loading...</p>
           </div>
          </div>
        );
        
      } else {
        return (
          <div className="App">
             
             <LocationSearch />

            <Header region={region} current={current} today={today} currentWeather={currentWeather} city={this.state.city}/>
            <TodaysForecast hourlyForecast={hourlyForecast} today={today} current={current}/>
            <TenDayForecast daily={daily}/>
            <CovidCases region={region} regionCode={regionCode} />
            <Details current={current} />
            <DynamicBackground currentWeather={currentWeather}/>
          </div>
          );
      }
   
    }
   }

export default App;
