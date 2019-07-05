import React from 'react';
import './App.css';
import { fetchWeather } from './util/api.js'
import Weather from './components/Weather.js'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCity: '',
      weatherReport: null,
      error: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.computeWeatherID = this.computeWeatherID.bind(this)
    this.getDescription = this.getDescription.bind(this)
    this.fahrenheitToKelvin = this.fahrenheitToKelvin.bind(this)
    this.getTemperature = this.getTemperature.bind(this)
  }

  handleSubmit (event) {
    fetchWeather(this.state.selectedCity)
      .then((data) => {
        console.log(data)

        this.setState({
          weatherReport: data,
          error: null
        })

      })
      .catch((error) => {
        console.warn('Error fetching weather: ', error)

      })
      console.log(JSON.stringify(this.state))
      if (this.state.weatherReport){
        if (this.state.weatherReport.cod === "404"){
          this.setState({
            error: "code 404: error fetching weather"
          })
        }
      }
  }

  handleChange(event) {
    this.setState({
      selectedCity: event.target.value,
    })
  }


  computeWeatherID() {
    const { error, weatherReport }  = this.state;
    let weatherID = 1;

    if (weatherReport !== null){
      if (weatherReport.cod !== "404"){
        weatherID = Math.floor(weatherReport.weather[0]["id"] / 100)
      }
      else { weatherID = 404; }
    }

    return weatherID
  }

  getDescription() {
    const { error, weatherReport }  = this.state;
    let description = "";


    if (weatherReport !== null){
      if (weatherReport.cod !== "404"){
        description = weatherReport.weather[0]["description"];
      }
      else { description = weatherReport.message; }
    }

    return description
  }

  fahrenheitToKelvin(temp) {
    return (Math.floor((temp - 273.15) * (9/5) + 32 ))
  }

  getTemperature() {
    const { error, weatherReport }  = this.state;
    let temperature = "";

    if (weatherReport !== null){
      if (weatherReport.cod !== "404"){
        temperature = this.fahrenheitToKelvin(weatherReport.main.temp)
      }
      else { temperature = "404"; }
    }

    return temperature
  }

  render() {
    return (
      <div className = "container">
        <div>



        {
            <Weather
              id={this.computeWeatherID()}
              description={this.getDescription()}
              temperature ={this.getTemperature()}/>

        }

        </div>
        <br />
        <input
          type='text'
          placeholder='city'
          value={this.state.selectedCity}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>

      </div>
    )
  }
}

export default App;
