import React from 'react';
import './Beers.css';
import BeerCard from '../components/BeerCard'

const Beers = (props) => (
    <div>
      {props.beers.map((beer, i) => <BeerCard beer={beer} key={i} />
      )}
    </div>
  )


export default Beers;
