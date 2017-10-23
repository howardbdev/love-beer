import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentCard from '../components/CommentCard'
import { getComments } from '../actions/comments'

class Comments extends Component {

  render() {
    const comments = this.props.comments.map(comment=><CommentCard content={comment.content} key={comment.id}/>)
    return(
      <div>
        {comments}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
      comments: state.comments,
      beer: state.beer
    })
}

export default connect(mapStateToProps, {getComments})(Comments);
