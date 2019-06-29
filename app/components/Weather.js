import React from 'react';
import { WiCloudy, WiDaySunny, WiRain, WiThunderstorm, WiFog, WiNightCloudy, WiSnow, WiRaindrops, WiMoonAltFull } from 'react-icons/wi'



var weatherIcons = {
  2: <WiThunderstorm color="rgb(140, 22, 134)" size={300}/>,
  3: <WiRaindrops color="rgb(140, 22, 134)" size={300}/>,
  5: <WiRain color="rgb(140, 22, 134)" size={300}/>,
  6: <WiSnow color="rgb(140, 22, 134)" size={300}/> ,
  7: <WiFog color="rgb(140, 22, 134)" size={300}/>,
  8: <WiDaySunny color="rgb(140, 22, 134)" size={300}/>,
}

class Weather extends React.Component {
  constructor(props){
    super(props)

    console.log(this.props)

    this.determineWeatherID = this.determineWeatherID.bind(this)
  }

  determineWeatherID(id) {
    console.log(id)

    return weatherIcons[2]
  }



  render(){
    return (
      <React.Fragment>

        {weatherIcons[this.props.id]}

      </React.Fragment>
    )
  }
}

export default Weather
