import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvoteBeer, downvoteBeer } from '../actions/beers';

class VoteForm extends Component {

  handleUpvote = (event) => {
    console.log("this.props is: ", this.props)
      event.preventDefault();
      this.props.upvoteBeer(this.props.beer_id);
    }
  handleDownvote = (event) => {
    console.log("this.props is: ", this.props)
      event.preventDefault();
      this.props.downvoteBeer(this.props.beer_id);
    }

  render() {
    return (
      <div className="vote-form">
        <form className="upvote-form" onSubmit={this.handleUpvote}>
          <button className="vote-button upvote-button" type="submit">Upvote ++</button>
        </form>
        <form className="downvote-form" onSubmit={this.handleDownvote}>
          <button className="vote-button downvote-button" type="submit">Downvote --</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {upvoteBeer, downvoteBeer})(VoteForm);
