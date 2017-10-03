import React, { Component } from 'react';
import Beers from './Beers';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     beers: []
  //   };
  // }

    componentDidMount() {
      fetch('http://localhost:3001/api/beers')
        .then(response => response.json())
        // .then(beers => this.setState({ beers }))
        // .catch(error => console.log(error))
    }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <img src="http://images.freeimages.com/images/small-previews/9c1/pint-of-beer-1543005.jpg" className="App-logo" alt="I Love Beer - Do You?" />
        <h2>Love Beer</h2>
        <Beers />
      </div>
    );
  }
}

export default App;
