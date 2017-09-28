import React, { Component } from 'react';
import './Beers.css';
import BeerCard from '../components/BeerCard'
import BeerForm from './BeerForm'

class Beers extends Component {

  render() {
    return (
      <div>
        {this.props.beers.map(beer => <BeerCard beer={beer} key={beer.id} />
        )}
        <BeerForm/>
      </div>
    );
  }
}


export default Beers;
