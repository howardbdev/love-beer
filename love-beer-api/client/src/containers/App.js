import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://images.freeimages.com/images/small-previews/9c1/pint-of-beer-1543005.jpg" className="App-logo" alt="I Love Beer - Do You?" />
          <h2>Love Beer</h2>
        </div>
        <div><Beers/></div>
      </div>
    );
  }
}

export default App;
