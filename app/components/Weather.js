import React from 'react';
import { WiCloudy, WiDaySunny, WiRain, WiThunderstorm, WiFog, WiNightCloudy, WiSnow, WiRaindrops, WiMoonAltFull } from 'react-icons/wi'



var dictionary = {
  2: <WiThunderstorm color="rgb(140, 22, 134)" size={300}/>,
  3: <WiRaindrops color="rgb(140, 22, 134)" size={300}/>,
  5: <WiRain color="rgb(140, 22, 134)" size={300}/>,
  6: <WiSnow color="rgb(140, 22, 134)" size={300}/> ,
  7: <WiFog color="rgb(140, 22, 134)" size={300}/>,
  8: <WiDaySunny color="rgb(140, 22, 134)" size={300}/>,
}

var ID;


class Weather extends React.Component {
  constructor(props){
    super(props)

    console.log(this.props)
  }





  render(){
    return (
      <React.Fragment>

        {dictionary[Math.floor(this.props.data["id"]/100)]}
        <ul>
          <li>{this.props.data.description}</li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Weather
