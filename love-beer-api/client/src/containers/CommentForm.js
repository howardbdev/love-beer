import React, { Component } from 'react';

class CommentForm extends Component {

  render() {
    return(
      <div>
        <p>Comment on this beer:</p>
        <form className="comment-form">
          <div>
            <textarea name="beer-comment-textarea" id={this.props.beer_id}></textarea>
          </div>
          <div>
            <input type="submit" className="submit-comment-button" value="Submit Comment"/>
          </div>
        </form>
      </div>

    )
  }
}

export default CommentForm;
