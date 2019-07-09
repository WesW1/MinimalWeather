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
    this.fahrenheitToKelvin = this.fahrenheitToKelvin.bind(this);
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

  fahrenheitToKelvin(temp) {
    return Math.floor((temp - 273.15) * (9 / 5) + 32);
  }

  get isValidWeatherCode() {
    const { weatherReport } = this.state;

    return weatherReport.cod !== '404';
  }

  get weatherId() {
    const { weatherReport } = this.state;

    if (!weatherReport) {
      return 1;
    }
    if (!this.isValidWeatherCode) {
      return 404;
    }

    return Math.floor(weatherReport.weather[0]['id'] / 100);
  }

  get weatherDescription() {
    const { weatherReport } = this.state;

    if (!weatherReport) {
      return '';
    }
    if (!this.isValidWeatherCode) {
      return weatherReport.message;
    }

    return weatherReport.weather[0]['description'];
  }

  get weatherTemperature() {
    const { weatherReport } = this.state;

    if (!weatherReport) {
      return '';
    }
    if (!this.isValidWeatherCode) {
      return '404';
    }

    return this.fahrenheitToKelvin(weatherReport.main.temp) + '°F';
  }

  render() {
    return (
      <div className="container">
        <Weather
          id={this.weatherId}
          description={this.weatherDescription}
          temperature={this.weatherTemperature}
        />
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
