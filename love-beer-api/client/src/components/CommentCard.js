import React from 'react'

const CommentCard = (props) => {
  return(
      <div className="CommentCard">
        <p className="comment">{props.content}</p>
      </div>
  )
}

export default CommentCard
