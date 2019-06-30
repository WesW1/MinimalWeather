import React from 'react';
import { WiCloudy, WiDaySunny, WiRain, WiThunderstorm, WiFog, WiNightCloudy, WiSnow, WiRaindrops, WiMoonAltFull, WiAlien } from 'react-icons/wi'
import {useSpring, animated} from 'react-spring';

var weatherIcons = {
  1: <WiAlien color="rgb(140, 22, 134)" size={300}/>,
  2: <WiThunderstorm color="rgb(140, 22, 134)" size={300}/>,
  3: <WiRaindrops color="rgb(140, 22, 134)" size={300}/>,
  5: <WiRain color="rgb(140, 22, 134)" size={300}/>,
  6: <WiSnow color="rgb(140, 22, 134)" size={300}/> ,
  7: <WiFog color="rgb(140, 22, 134)" size={300}/>,
  8: <WiDaySunny color="rgb(140, 22, 134)" size={300}/>,
}




export default function Weather(props){
  return (
    <React.Fragment>

        {weatherIcons[props.id]}

      <ul>
        <li>{props.id}</li>
      </ul>
    </React.Fragment>
  )
}
