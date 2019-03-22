import React from 'react';
import Beers from '../containers/Beers';
import Beer from '../containers/Beer';
import BeerForm from '../containers/BeerForm';
import '../css/App.css';
import {
  Route,
  Switch,
} from 'react-router-dom'
import Navbar, { Home, About, Login } from '../components/Navbar';

const App = () => {
  return (

      <div className="App">
        <h1 className="title">Love Beer</h1>
        <Navbar className="navbar"/>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/about" render={About} />
          <Route exact path="/login" render={Login} />
          <Route exact path="/beers/new" component={BeerForm}/>
          <Route exact path="/beers" component={Beers}/>
          <Route path="/beers/:id/edit" component={BeerForm} />
          <Route path="/beers/:id" component={Beer} />
        </Switch>
      </div>

  );
}

export default App;
// BrowserRouter as Router,
// return wrapped in <Router>
