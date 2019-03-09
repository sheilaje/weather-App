import React from 'react';
import PropTypes from 'prop-types';

function ForecastDetail(props){
  const today = props.forecast.forecastMoment.format('ddd');
  const { mintemp_c, maxtemp_c, avgtemp_c, mintemp_f, maxtemp_f, avgtemp_f, maxwind_kph, maxwind_mph, totalprecip_mm, totalprecip_in, avgvis_km, avgvis_miles, avghumidity, uv} = props.forecast.day;
  const { sunrise, sunset, moonrise, moonset } = props.forecast.astro;
  const { text, icon } = props.forecast.day.condition;

  return(
    <div>
      <img src={icon} alt={icon}/>
      <dl>
        <dt>Temperature</dt>
        <dd>
          Min:  {mintemp_c}^C  {mintemp_f}^F<br/>
          max:  {maxtemp_c}^C  {maxtemp_f}^F<br/>
          avg:  {avgtemp_c}^C  {avgtemp_f}^F<br/>
        </dd>
        <dt>Max Windspeed</dt>
        <dd>{maxwind_kph} kph  |  {maxwind_mph} mph</dd>
        <dt>Precipitation</dt>
        <dd>{totalprecip_in} inches  |  {totalprecip_mm} mm</dd>
        <dt>Visibility</dt>
        <dd>{avgvis_km} km  |  {avgvis_miles} miles</dd>
        <dt>Humidity</dt>
        <dd>{avghumidity}%</dd>
        <dt>UV index</dt>
        <dd>{uv}</dd>
        <dt>Epoch</dt>
        <dd>
          sunrise: {sunrise}<br/>
          sunset: {sunset}<br/>
          moonrise: {moonrise}<br/>
          moonset: {moonset}<br/>
        </dd>
      </dl>
    </div>
  )
}

export default ForecastDetail;