import React from 'react';
import Beers from '../containers/Beers';
import BeerForm from '../containers/BeerForm';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Navbar, { Home, About, Login, Search } from '../components/Navbar';
import BeerShow from './BeerShow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1 className="title">Love Beer</h1>
        <Navbar className="navbar"/>
        <Route exact path="/" render={Home} />
        <Route exact path="/about" render={About} />
        <Route exact path="/search" render={Search} />
        <Route exact path="/login" render={Login} />
        <Route exact path="/beers/new" component={BeerForm}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/beers/:id" render={BeerShow} />
      </div>
    </Router>
  );
}

export default App;
