import React from 'react';
import PropTypes from 'prop-types';
import {
  WiNa,
  WiDaySunny,
  WiRain,
  WiThunderstorm,
  WiFog,
  WiSnow,
  WiAlien,
  WiRaindrops,
} from 'react-icons/wi';

var weatherIcons = {
  1: WiAlien,
  2: WiThunderstorm,
  3: WiRaindrops,
  4: WiAlien,
  5: WiRain,
  6: WiSnow,
  7: WiFog,
  8: WiDaySunny,
  404: WiNa,
};

export default function Weather(props) {
  const WeatherIcon = weatherIcons[props.id];

  return (
    <React.Fragment>
      <WeatherIcon size={300} color="rgb(150, 69, 100)" />

      <div className="weather-description">
        <p>{props.temperature}</p>
        <p>{props.description}</p>
      </div>
    </React.Fragment>
  );
}

Weather.propTypes = {
  id: PropTypes.number,
  temperature: PropTypes.string,
  description: PropTypes.string,
};
