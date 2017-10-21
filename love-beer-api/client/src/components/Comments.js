import React from 'react';

const Comments = (props) => {
  console.log("PROPS.COMMENTS", props.comments)
  const comments = props.comments
  //TRYNA GET THIS TO WORK
  console.log("comments iszz ", comments)
  return(
    <div className="comments">
    </div>
  )
}

export default Comments

// {comments}
