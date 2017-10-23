import React from 'react'
import CommentForm from '../containers/CommentForm'
import Comments from '../containers/Comments'

const BeerShow = ({beer}) => {

    return <div className="BeerCard Show">
      <h1>{beer.name}</h1>
      <p>Brewer - <strong>{beer.brewer_name}</strong></p>
      <p>Style - <strong>{beer.style}</strong></p>
      <img className="beerImage" src={beer.image_url} alt="(no pic)"/>
      <p className="beer-description">{beer.description}</p>
      <p>Votes: {beer.upvotes}</p>
      <CommentForm beer_id={beer.id}/>
      <h4>Comments</h4>
      <Comments beer_id={beer.id}/>
    </div>
}
export default BeerShow;
