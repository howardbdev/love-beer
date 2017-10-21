import React from 'react'

const CommentCard = (props) => {
  console.log("commentCard content", props.content)
  return(
      <div className="CommentCard">
        --> {props.content}
      </div>
  )
}

export default CommentCard
