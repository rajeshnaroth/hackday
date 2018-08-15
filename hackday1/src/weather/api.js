function getWeather(zipcode) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=a8054cee515b63def6fe545ec0f88131`
  )
    .then(res => res.json())
    .then(wData => {
      // transform
      return {
        temp: {
          current: wData.main.temp,
          min: wData.main.temp_min,
          max: wData.main.temp_max
        }
      };
    });
}

export { getWeather };
