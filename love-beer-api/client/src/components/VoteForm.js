import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvoteBeer, downvoteBeer } from '../actions/beers';
import { bindActionCreators } from 'redux';

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
      <div>
        <form className="upvote-form" onSubmit={this.handleUpvote}>
          <button type="submit">Upvote +</button>
        </form>
        <form className="downvote-form" onSubmit={this.handleDownvote}>
          <button type="submit">Downvote -</button>
        </form>
        <p>Vote total: </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      upvoteBeer: upvoteBeer,
      downvoteBeer: downvoteBeer
    }, dispatch)
}

export default connect(null, {upvoteBeer, downvoteBeer})(VoteForm);
