import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Curse of the Crimson Throne <br></br>
          -A Fan-based Pathfinder Adventure Path Game-
        </p>
        <button className ="play-button">Play!</button>
        <p className="disclaimer">
          *Disclaimer* <br></br>
          The following is a fan-based creation of the Paizo Curse of the Crimson Throne
          Adventure Path. Pathfinder and Curse of the Crimson Throne are owned by Paizo.
          Please support the official release.
        </p>
      </div>
    );
  }
}

export default App;
