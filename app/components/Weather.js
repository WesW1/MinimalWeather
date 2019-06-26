import React from 'react';
import { WiCloudy, WiDaySunny, WiRain, WiThunderstorm, WiFog, WiNightCloudy, WiSnow, WiRaindrops, WiMoonAltFull } from 'react-icons/wi'
import cloudy from '../resources/backgrounds/cloudy.jpg'
import mist from '../resources/backgrounds/mist.jpg'
import rain from '../resources/backgrounds/rain.jpg'
import sunny from '../resources/backgrounds/sunny.jpg'
import thunder from '../resources/backgrounds/thunder.jpg'


var weatherBackgrounds = {
  '1': cloudy,
  '2': mist,
  '3': rain,
  '4': sunny,
  '5': thunder
}


var dictionary = {
  2: <WiThunderstorm color="rgb(140, 22, 134)" size={300}/>,
  3: <WiRaindrops color="rgb(140, 22, 134)" size={300}/>,
  5: <WiRain color="rgb(140, 22, 134)" size={300}/>,
  6: <WiSnow color="rgb(140, 22, 134)" size={300}/> ,
  7: <WiFog color="rgb(140, 22, 134)" size={300}/>,
  8: <WiDaySunny color="rgb(140, 22, 134)" size={300}/>,
  //Clouds: WiCloudy,
}

var ID;

class Weather extends React.Component {
  constructor(props){
    super(props)

    ID = Math.floor(props.data["id"] / 100)
    console.log(this.props)
    this.props.changeBackground(weatherBackgrounds['4'])
    //mainDescription = props.data["main"]
    //backgroundchange = this.props.changeBackground
    this.state = {
      currentWeatherIcon: null
    }
  }





  render(){
    return (
      <React.Fragment>

        {this.state.currentWeatherIcon}
        <ul>
          <li>{this.props.data.description}</li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Weather
