
const api = {
    key:"ddbff12b3b4682abfc8600930d5f588a",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  

class openWeather{
    constructor(props){
    }
getCurrentConditions(api){
    fetch(`${api.base}/weather?q=Frackville&units=imperial&appid=${api.key}`)
    .then(res=> res.json())
    .then((result) => {

    },
    (error)=>{
        
    })
}

}

export default openWeather;