import React, { Component } from 'react';
import Beers from './Beers';
import './App.css';


class App extends Component {

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className="title">Love Beer</h1>
        <h3 className="title">Vote or add a beer!!!</h3>
        <Beers />
      </div>
    );
  }
}

export default App;
