import React, { Component } from 'react';
import StartScreen from './paths/Start-screen.js';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import  './App.css';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <p className="App-intro">
            Curse of the Crimson Throne <br></br>
            -A Fan-based Pathfinder Adventure Path Game-
          </p>
          <Switch>
            <button className ="play-button"><Link to="/paths/startScreen">Play!</Link></button>
          </Switch>
          <p className="disclaimer">
            *Disclaimer* <br></br>
            The following is a fan-based creation of the Paizo Curse of the Crimson Throne
            Adventure Path. Pathfinder and Curse of the Crimson Throne are owned by Paizo.
            Please support the official release.
          </p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
