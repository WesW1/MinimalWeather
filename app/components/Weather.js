import React, { useState } from 'react';
import { WiNa, WiCloudy, WiDaySunny, WiRain, WiThunderstorm, WiFog, WiNightCloudy, WiSnow, WiMoonAltFull, WiAlien, WiRaindrops } from 'react-icons/wi'
import { WiDegrees } from 'react-icons/wi'
import {useSpring, animated, useTransition} from 'react-spring';
import {Transition} from 'react-spring/renderprops';

var weatherIcons = {
  1: WiAlien,
  2: WiThunderstorm,
  3: WiRaindrops,
  4: WiAlien,
  5: WiRain,
  6: WiSnow,
  7: WiFog,
  8: WiDaySunny,
  404: WiNa
}




export default function Weather(props){
  const WeatherIcon = weatherIcons[props.id];

  return (
      <React.Fragment>
        <WeatherIcon size={300} color="rgb(150, 69, 100)" />

        {props.id === 1 ?
              null
              :
              <div className="weather-description">
                <p>{props.temperature}°F</p>
                <p>{props.description}</p>
              </div>  }


      </React.Fragment>
    );

}
