import React, { Component } from 'react';
import Beers from './Beers';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Navbar, { Home, About, Login, Search } from '../components/Navbar';

class App extends Component {

  render() {
    console.log(this.state)
    return (
      <Router>
        <div className="App">
          <h1 className="title">Love Beer</h1>
          <Navbar/>
          <Route exact path="/" render={Home} />
          <Route exact path="/about" render={About} />
          <Route exact path="/search" render={Search} />
          <Route exact path="/login" render={Login} />
          <Beers />
        </div>
      </Router>
    );
  }
}

export default App;
