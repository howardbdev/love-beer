import React from 'react';
import { connect } from 'react-redux';
import CommentCard from '../components/CommentCard'
// import { getComments } from '../actions/comments'

const Comments = (props) => {
  if (props.comments) {
    const comments = props.comments.map(comment=>
      <CommentCard
        comment={comment}
        key={comment.id}
      />)
    return(
      <div>
        {comments}
      </div>
    )

  }
  else {
    return null;
  }

}


const mapStateToProps = (state) => {
  return ({
      beer: state.beer,
      comments: state.comments,
    })
}

export default connect(mapStateToProps)(Comments);
