import React from 'react'
import CommentForm from '../containers/CommentForm'
import Comments from '../containers/Comments'
import { Link } from 'react-router-dom'

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
      <Comments comments={beer.comments}/>
      <p>
        <Link
          className='edit-link'
          id='edit-link'
          to={{pathname: `/beers/${beer.id}/edit`, state: {current_beer: {beer}}}}
          >
            Edit or Delete This Beer
          </Link>
      </p>
    </div>
}
export default BeerShow;
