import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCommentFormData } from '../actions/commentForm';
import { createComment } from '../actions/comments';

class CommentForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    console.log('event.target is ', event.target)
    console.log(name)
    const currentCommentFormData = Object.assign({}, this.props.commentFormData, {
        [name]: value
    })
    console.log('currentCommentFormData is ',currentCommentFormData)
    this.props.updateCommentFormData(currentCommentFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.props.commentFormData)
    // setTimeout(()=>{
    //   if (l < this.props.beers.length) {
    //     this.props.history.push('/beers/' + `${this.props.beers[this.props.beers.length-1].id}`)
    //   }
    // }, 1000)
  }
  render() {
    const { content } = this.props.commentFormData;
    return(
      <div>
        <p>Comment on this beer:</p>
        <form className="comment-form">
          <div>
            <label htmlFor="description">Comment: </label>
            <textarea
              type="text"
              name="content"
              value={content}
              id={this.props.beer_id}
              onChange={this.handleOnChange}
            />
          </div>

          <div>
            <input type="submit" className="submit-comment-button" value="Submit Comment"/>
          </div>
        </form>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    commentFormData: state.commentFormData,
  }
}


export default connect(mapStateToProps, {updateCommentFormData, createComment})(CommentForm);


// name="beer-comment-textarea"
