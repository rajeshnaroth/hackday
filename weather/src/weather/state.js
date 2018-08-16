import { GET_WEATHER, UPDATE_ZIPCODE } from './actions';
import { getWeather } from './api';

const initialWeatherState = props => {
  return {
    temp: {
      current: 0,
      min: 0,
      max: 0
    },
    zipcode: props.zipcode || props.match.params.zipcode || '95132'
  };
};

async function weatherReducer(state, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_WEATHER:
      let wData = await getWeather(action.data.zipcode);
      newState.temp = wData.temp;
      break;
    case UPDATE_ZIPCODE:
      newState.zipcode = action.data.zipcode;
      break;
    default:
      throw new Error('No action provided');
  }

  return Promise.resolve(newState);
}

export { initialWeatherState, weatherReducer };
