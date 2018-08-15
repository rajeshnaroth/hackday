import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Weather from './weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hackday</h1>
        </header>
        <div className="App-intro">
          <Weather zipcode="95132" />
        </div>
      </div>
    );
  }
}

export default App;
