import React from 'react';
import './App.css';
import { fetchWeather } from './util/api.js'
import Weather from './components/Weather.js'
import cloudy from './resources/backgrounds/cloudy.jpg'
import mist from './resources/backgrounds/mist.jpg'
import rain from './resources/backgrounds/rain.jpg'
import sunny from './resources/backgrounds/sunny.jpg'
import thunder from './resources/backgrounds/thunder.jpg'


var weatherBackgrounds = {
  '1': cloudy,
  '2': mist,
  '3': rain,
  '4': sunny,
  '5': thunder
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCity: '',
      weatherReport: null,
      error: null,
      background: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onChangeParentBackground = this.onChangeParentBackground.bind(this)
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
          error: 'there was an error fetching the weather'
        })
      })
      console.log(JSON.stringify(this.state))
  }

  handleChange(event) {
    this.setState({
      selectedCity: event.target.value
    })
  }

  //Takes an object that contains a picture and attaches that picture
  //to the backgorund.
  onChangeParentBackground(backgroundImage){
    this.setState({
      background: backgroundImage
    })
  }

  render() {
    return (
      <div style = {{backgroundImage: "url("+this.state.background+")"}}>
        <pre>The city is {this.state.selectedCity}</pre>
        <br />
        <input
          type='text'
          placeholder='city'
          value={this.state.selectedCity}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <div>

          {this.state.weatherReport && <Weather
            data={this.state.weatherReport.weather[0]}
            changeBackground={this.onChangeParentBackground}/>}

        </div>
      </div>
    )
  }
}

export default App;
