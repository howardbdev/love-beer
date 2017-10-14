import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCommentFormData } from '../actions/commentForm';
import { createComment } from '../actions/comments'

class CommentForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    console.log(name)
    const currentCommentFormData = Object.assign({}, this.props.commentFormData, {
        [name]: value
    })
    this.props.commentFormData(currentCommentFormData)
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

const mapStateToProps = state => {
  return {
    commentFormData: state.commentFormData,
  }
}


export default connect(mapStateToProps, {updateCommentFormData, createComment})(CommentForm);
