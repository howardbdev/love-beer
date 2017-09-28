import React from 'react';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';


const BeerCard = ({beer}) => {
    return <div className="BeerCard">
      <h1>{beer.name}</h1>
      <p>brewer - {beer.brewer.name}</p>
      <p>style - {beer.style}</p>
      <img className="beerImage" src={beer.image_url} alt="(no pic)"/>
      <p>{beer.description}</p>
    </div>
}

export default BeerCard;;