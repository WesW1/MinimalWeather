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
      error: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.computeWeatherID = this.computeWeatherID.bind(this)
  }

  handleSubmit (event) {
    fetchWeather(this.state.selectedCity)
      .then((data) => {
        console.log(data)

        this.setState({
          weatherReport: data
        })

      })
      .catch((error) => {
        console.warn('Error fetching weather: ', error)

        this.setState({
          error: 'there was an error fetching the weather',
          weatherReport: null
        })
      })
      console.log(JSON.stringify(this.state))
  }

  handleChange(event) {
    this.setState({
      selectedCity: event.target.value,
    })
  }


  computeWeatherID() {
    return (
      this.state.weatherReport === null
        ? 1
        : Math.floor(this.state.weatherReport.weather[0]["id"] / 100)
      )
  }

  render() {
    return (
      <div className = "container">
        <div>
          <Weather id={this.computeWeatherID()} />
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
