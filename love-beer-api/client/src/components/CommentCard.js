import React from 'react'

const CommentCard = (props) => {
  return(
      <div className="CommentCard">
        <li className="comment">{props.content}</li>
      </div>
  )
}

export default CommentCard
