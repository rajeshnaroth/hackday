import React from 'react';

const WeatherWidget = props => {
  return (
    <div>
      <h4>{props.zipcode}</h4>
      <h5>Right Now it is {props.temp.current} F</h5>
    </div>
  );
};

export default WeatherWidget;
