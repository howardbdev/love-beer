import React from 'react'
import VoteForm from './VoteForm'
import CommentForm from '../containers/CommentForm'
import CommentCard from './CommentCard'

const BeerShow = ({beer}) => {
  let comments = [];
  if (beer.length !== 0) {
    console.log('HOW MANY', beer)
    comments = beer.comments.map(comment=><CommentCard content={comment.content} key={comment.id}/>)
  }
  console.log("BeerShow beer is ", beer.length, "comments", comments)
    return <div className="BeerCard Show">
      <h1>{beer.name}</h1>
      <p>Brewer - <strong>{beer.brewer_name}</strong></p>
      <p>Style - <strong>{beer.style}</strong></p>
      <img className="beerImage" src={beer.image_url} alt="(no pic)"/>
      <p className="beer-description">{beer.description}</p>
      <p>Votes: {beer.upvotes}</p>
      <VoteForm beer_id={beer.id}/>
      <CommentForm beer_id={beer.id}/>
      <h4>Comments</h4>
      {comments}
    </div>
}
export default BeerShow;


{/* <div className="comments">
  {beer.comments.map(comment => <p>{comment.content}</p>)}
</div> */}
