import React from 'react';
import { connect } from 'react-redux';
import { upvoteBeer, downvoteBeer } from '../actions/beers'

const VoteForm = () => {

  const handleUpvote = (event) => {
    event.preventDefault();
    console.log(event.target)
    console.log("you are in the handleUpvote function", console.log(event.target))
    console.log("this is ", this)
    debugger
  }
  const handleDownvote = (event) => {
    event.preventDefault();
    console.log(event.target)
    console.log("you are in the handleDownvote function", console.log(event.target))
    console.log("this is ", this)
  }
  return (
    <div>
      <form className="upvote-form" onSubmit={handleUpvote}>
        <button type="submit">Upvote +</button>
      </form>
      <form className="downvote-form" onSubmit={handleDownvote}>
        <button type="submit">Downvote -</button>
      </form>
      <p>Vote total: </p>
    </div>
  );
}

export default connect(null, {upvoteBeer, downvoteBeer})(VoteForm);
