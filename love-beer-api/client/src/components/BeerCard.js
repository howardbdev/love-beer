import React from 'react';
// import { connect } from 'react-redux';
import VoteForm from './VoteForm';
import CommentForm from '../containers/CommentForm';
import { NavLink } from 'react-router-dom';


const BeerCard = ({beer}) => {
    const url =`/beer/${beer.id}`
    return <div className="BeerCard">
      <NavLink
        to={url}
        exact
      ><h1>{beer.name}</h1></NavLink>
      <p>Brewer - <strong>{beer.brewer_name}</strong></p>
      <p>Style - <strong>{beer.style}</strong></p>
      <img className="beerImage" src={beer.image_url} alt="(no pic)"/>
      <p className="beer-description">{beer.description}</p>
      <p>Votes: {beer.upvotes}</p>
      <VoteForm beer_id={beer.id}/>
      <CommentForm beer_id={beer.id}/>
    </div>
}

export default BeerCard;
// export default connect(null, {getBeer})(BeerCard);
