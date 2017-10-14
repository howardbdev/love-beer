import React from 'react';
import VoteForm from './VoteForm';
import CommentForm from '../containers/CommentForm';
import { NavLink } from 'react-router-dom';


const BeerCard = (props) => {
    const url =`/beers/${props.beer.id}`
    return <div className="BeerCard">
      <NavLink
        to={url}
        exact
      ><h1>{props.beer.name}</h1></NavLink>
      <p>Brewer - <strong>{props.beer.brewer_name}</strong></p>
      <p>Style - <strong>{props.beer.style}</strong></p>
      <img className="beerImage" src={props.beer.image_url} alt="(no pic)"/>
      <p className="beer-description">{props.beer.description}</p>
      <p>Votes: {props.beer.upvotes}</p>
      <VoteForm beer_id={props.beer.id}/>
    </div>
}

export default BeerCard;
