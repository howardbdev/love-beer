import React from 'react';
import VoteForm from './VoteForm'
import CommentForm from '../containers/CommentForm'

const BeerCard = ({beer}) => {
    return <div className="BeerCard">
      <h1>{beer.name}</h1>
      <p>brewer - {beer.brewer_name}</p>
      <p>style - {beer.style}</p>
      <img className="beerImage" src={beer.image_url} alt="(no pic)"/>
      <p>{beer.description}</p>
      <p>Votes: {beer.upvotes}</p>
      <VoteForm beer_id={beer.id}/>
      <CommentForm beer_id={beer.id}/>
    </div>
}

export default BeerCard;;
