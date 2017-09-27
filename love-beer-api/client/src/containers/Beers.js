import React from 'react';
import './Beers.css';

const Beers = (props) => {

  const beers = props.beers.map((beer, i) => {
    return <div className="BeerCard" key={i}>
      <h1>{beer.name}</h1>
      <p>brewer - {beer.brewer.name}</p>
      <p>style - {beer.style}</p>
      <img className="beerImage" src={beer.image_url} alt="(no pic)"/>
      <p>{beer.description}</p>
    </div>
  })

  return(
    <div>
      {beers}
    </div>
  )
}

export default Beers;
