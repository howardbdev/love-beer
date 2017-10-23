import React from 'react'

const CommentCard = (props) => {
  return(
      <div className="CommentCard">
        --> {props.content}
      </div>
  )
}

export default CommentCard
