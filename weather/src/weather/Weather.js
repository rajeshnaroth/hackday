import React, { Component } from 'react';
import { GET_WEATHER, UPDATE_ZIPCODE } from './actions';
import { initialWeatherState, weatherReducer } from './state';
import WeatherWidget from './WeatherWidget';
import WeatherForm from './WeatherForm';
import GithubList from '../github/GithubList';

class Weather extends Component {
  state = initialWeatherState(this.props);

  async dispatch(action) {
    const updatedState = await weatherReducer(this.state, action);
    this.setState(updatedState);
  }

  reloadData = () => {
    this.dispatch({
      type: GET_WEATHER,
      data: {
        zipcode: this.state.zipcode
      }
    });
  };

  updateZipcode = event => {
    this.dispatch({
      type: UPDATE_ZIPCODE,
      data: {
        zipcode: event.target.value
      }
    });
  };

  componentDidMount() {
    this.reloadData();
  }

  render() {
    return (
      <section>
        <WeatherWidget zipcode={this.state.zipcode} temp={this.state.temp} />
        <WeatherForm
          zipcode={this.state.zipcode}
          updateZipcode={this.updateZipcode}
          reloadData={this.reloadData}
        />
        <GithubList search="angular" />
      </section>
    );
  }
}

export default Weather;
