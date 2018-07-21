import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class StartScreen extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route><button className ="play-button">Play!</button></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default StartScreen;
