import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { GET_WEATHER, UPDATE_ZIPCODE } from './actions';
import { initialWeatherState, weatherReducer } from './state';

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
    const { zipcode } = this.state;
    return (
      <section>
        <h4>{zipcode}</h4>
        <h5>Right Now it is {this.state.temp.current} F</h5>
        <Form inline>
          <FormGroup inline>
            <Label for="zipcode">Email</Label>
            <Input
              width="8"
              type="text"
              value={zipcode}
              onChange={this.updateZipcode}
              onEnter={this.reloadData}
            />
            <Button color="danger" onClick={this.reloadData}>
              OK!
            </Button>
          </FormGroup>
        </Form>
      </section>
    );
  }
}

export default Weather;
