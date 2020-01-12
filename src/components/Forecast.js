import React from "react";

import './resources/vendor/bootstrap/css/bootstrap.min.css'
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
import Axios from "axios";

const API_KEY = "bb4881fceca01c117e071f510d37e106";

class Forecast extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      temperature: [],
      city: 'Pune',
      country: 'India',
      humidity: [],
      description: [],
      error: undefined,
      gotdata:"0"
    }
}



  
  getWeather(){
    //e.preventDefault();
    //const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;
    const city="Pune";
    const country="India";
    Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then(response => {
      console.log(response)

      if(this.state.gotdata==="0")
      {
        var i=0;
        for(i=0;i<=4;i++)
        {
          this.setState(({ temperature }) => ({ temperature: [...temperature, response.data.list[i].main.temp] }));
          this.setState(({ humidity }) => ({ humidity: [...humidity, response.data.list[i].main.humidity] }));
          this.setState(({ description }) => ({ description: [...description, response.data.list[i].weather[0].description] }));

        }
        
      this.setState({
        //temperature: response.data.main.temp,
        city: response.data.city.name,
        country: response.data.country,
        // humidity: response.data.main.humidity,
        // description: response.data.weather[0].description,
        error: "",
        gotdata:"1"
       });
      }
     })
 .catch(error => { console.log(error)})


    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // const data = await api_call.json();
    // //if (city && country) {
    //   this.setState({
    //     temperature: data.main.temp,
    //     city: data.name,
    //     country: data.sys.country,
    //     humidity: data.main.humidity,
    //     description: data.weather[0].description,
    //     error: ""
    //    });
    //  } else {
    //   this.setState({
    //     temperature: undefined,
    //     city: undefined,
    //     country: undefined,
    //     humidity: undefined,
    //     description: undefined,
    //     error: "Please enter the values."
    //   });
    //}
  }
  render() {

    if(this.state.gotdata==="0")
      this.getWeather()
    return (

      
      
      <div class="container">
        
                <Titles />  
                        <Weather 
                        temperature={this.state.temperature[0]} 
                        humidity={this.state.humidity[0]}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description[0]}
                        error={this.state.error}/>

<Weather 
                        temperature={this.state.temperature[1]} 
                        humidity={this.state.humidity[1]}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description[1]}
                        error={this.state.error}/>

<Weather 
                        temperature={this.state.temperature[2]} 
                        humidity={this.state.humidity[2]}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description[2]}
                        error={this.state.error}/>

<Weather 
                        temperature={this.state.temperature[3]} 
                        humidity={this.state.humidity[3]}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description[3]}
                        error={this.state.error}/>

<Weather 
                        temperature={this.state.temperature[4]} 
                        humidity={this.state.humidity[4]}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description[4]}
                        error={this.state.error}/>
                  
                  
                  
     </div> 
                
    
     
    );
  }
};

export default Forecast;