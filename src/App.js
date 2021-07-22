import React, {Component} from 'react';
import './assets/weather-icons.min.css';
import './App.scss';

// get parts
import Header from './components/header';
import TodaysForecast from './components/todaysForecast';
import TenDayForecast from './components/TenDayForecast';
import Details from './components/details';

// get image
import loadingImage from './assets/download.png';

const weatherApi = {
  key:process.env.REACT_APP_WEATHER_API_KEY,
  base:"https://api.openweathermap.org/data/2.5/"
}

const ipDataApi = {
  base:"https://api.ipdata.co/",
  key:process.env.REACT_APP_IP_DATA_KEY
}


  const appBackground = {
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?weather,sunny)'
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
      // if(navigator.geolocation){
      //   navigator.geolocation.getCurrentPosition(
      //     (pos) =>{
      //       this.setState({
      //         lat:pos.coords.latitude,
      //         lng:pos.coords.longitude
      //       })
      //       this.fetchWeatherData(this.state.lat,this.state.lng);
      //     },
      //    (err)=>{
      //      console.log(err)
      //    }
      //   );
      // }



      if(localStorage.getItem('location-data')){
       
        const localData = JSON.parse(localStorage.getItem('location-data'));
       
        this.setState({
          city:localData.city,
          lat:localData.latitude,
          lng:localData.longitude
        })

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
          lng:res.longitude
        })
        
        localStorage.setItem('location-data',JSON.stringify(res));
        
        this.fetchWeatherData(this.state.lat,this.state.lng);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    init(){
  
    this.getWeatherByLocation();
  
    if(!localStorage.getItem('localWeatherData')){
      this.getWeatherByLocation();

    } else {
      const localWeatherData = JSON.parse(localStorage.getItem('localWeatherData'));
      
      this.setState({
        current:localWeatherData.current,
        currentWeather:localWeatherData.current.weather[0],
        hourlyForecast:localWeatherData.hourly.slice(0,24),
        daily:localWeatherData.daily.slice(1,8),
        today:localWeatherData.daily,
        isLoaded:true
      });
    
    }

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
          // cache stuff 
          let currTime = new Date();
          localStorage.setItem('TimeStamp', currTime);
          localStorage.setItem('localWeatherData',JSON.stringify(data));
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
      const { current, daily, today, hourlyForecast,currentWeather } = this.state;
 

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
          <div className="App" style={appBackground}>
         
            <Header current={current} today={today} currentWeather={currentWeather} city={this.state.city}/>
            <TodaysForecast hourlyForecast={hourlyForecast} today={today} current={current}/>
            <TenDayForecast daily={daily}/>
            <Details current={current} />
            
          </div>
          );
      }
   
    }
   }

export default App;
