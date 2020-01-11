import React from "react";

import './resources/vendor/bootstrap/css/bootstrap.min.css'
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
import Axios from "axios";

const API_KEY = "bb4881fceca01c117e071f510d37e106";

class Start_w extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      temperature: undefined,
      city: 'Pune',
      country: 'India',
      humidity: undefined,
      description: undefined,
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
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then(response => {
      console.log(response)
      this.setState({
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        error: "",
        gotdata:"1"
       });
       
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

      

      <div>
        
                <Titles />
                  
                        
                       
                     
                      <Weather 
                        temperature={this.state.temperature} 
                        humidity={this.state.humidity}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description}
                        error={this.state.error}/>
                  
                  
                  
     </div> 
                
    //   </div>
     
    );
  }
};

export default Start_w;