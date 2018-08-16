import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header/Header';
import Github from './github/Github';
import Weather from './weather/Weather';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header>
            <p>Welcome to Hackday</p>
          </Header>
          <Route exact path="/" component={Github} />
          <Route exact path="/github" component={Github} />
          <Route exact path="/weather" component={Weather} />
          <Route path="/github/:search" component={Github} />
          <Route path="/weather/:zipcode" component={Weather} />
        </div>
      </Router>
    );
  }
}

export default App;
