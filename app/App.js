import React from 'react';
import './App.css';
import { fetchWeather } from './util/api.js';
import Weather from './components/Weather.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: '',
      weatherReport: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.computeWeatherID = this.computeWeatherID.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.fahrenheitToKelvin = this.fahrenheitToKelvin.bind(this);
    this.getTemperature = this.getTemperature.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetchWeather(this.state.selectedCity)
      .then(data => {
        console.log(data);

        this.setState({
          weatherReport: data,
          error: null,
        });
      })
      .catch(error => {
        console.warn('Error fetching weather: ', error);
      });
  }

  handleChange(event) {
    this.setState({
      selectedCity: event.target.value,
    });
  }

  computeWeatherID() {
    const { weatherReport } = this.state;
    let weatherID = 1;

    if (weatherReport !== null) {
      if (weatherReport.cod !== '404') {
        weatherID = Math.floor(weatherReport.weather[0]['id'] / 100);
      } else {
        weatherID = 404;
      }
    }

    return weatherID;
  }

  getDescription() {
    const { weatherReport } = this.state;
    let description = '';

    if (weatherReport !== null) {
      if (weatherReport.cod !== '404') {
        description = weatherReport.weather[0]['description'];
      } else {
        description = weatherReport.message;
      }
    }

    return description;
  }

  fahrenheitToKelvin(temp) {
    return Math.floor((temp - 273.15) * (9 / 5) + 32);
  }

  getTemperature() {
    const { weatherReport } = this.state;
    let temperature = '';

    if (weatherReport !== null) {
      if (weatherReport.cod !== '404') {
        temperature = this.fahrenheitToKelvin(weatherReport.main.temp) + '°F';
      } else {
        temperature = '404';
      }
    }

    return temperature;
  }

  render() {
    return (
      <div className="container">
        <div>
          {
            <Weather
              id={this.computeWeatherID()}
              description={this.getDescription()}
              temperature={this.getTemperature()}
            />
          }
        </div>
        <br />
        <form className="input-container" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="city"
            value={this.state.selectedCity}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
