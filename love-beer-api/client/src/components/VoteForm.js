import React from 'react';

const VoteForm = () => {

  return (
    <div>
      <button className="upvote-button" onSubmit={this.handleUpvote}>Upvote ^^</button>
      <button className="downvote-button" onClick={this.handleDownvote}>Downvote vv</button>
    </div>
  );
}

export default VoteForm;
