import React from 'react'
import VoteForm from './VoteForm'

const BeerShow = ({beer}) => {
  console.log("BeerShow beer is ", {beer})
    return <div className="BeerCard Show">
      <h1>{beer.name}</h1>
      <p>Brewer - <strong>{beer.brewer_name}</strong></p>
      <p>Style - <strong>{beer.style}</strong></p>
      <img className="beerImage" src={beer.image_url} alt="(no pic)"/>
      <p className="beer-description">{beer.description}</p>
      <p>Votes: {beer.upvotes}</p>
      <VoteForm beer_id={beer.id}/>
    </div>
}
export default BeerShow;


{/* <div className="comments">
  {beer.comments.map(comment => <p>{comment.content}</p>)}
</div> */}
