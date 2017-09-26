import React, { Component } from 'react';
import Beers from './containers/Beers'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://images.pexels.com/photos/8800/snow-restaurant-mountains-sky.jpg?h=350&auto=compress&cs=tinysrgb" className="App-logo" alt="I Love Beer - Do You?" />
          <h2>Love Beer</h2>
        </div>
        <div><Beers/></div>
      </div>
    );
  }
}

export default App;
