import React, { useState } from "react";

const CommentForm = (props) => {
  const [commentText, setCommentText] = useState(' ');

  function handlesubmit(event) {
    event.preventDefault();
    let new_comment = {
      user: props.user.id,
      video_id: props.videoId,
      text: commentText,
      likes: 0,
      dislikes: 0,
    };
    props.addComment(new_comment);
    setCommentText(' ');
  }
  return (
    <form onSubmit={handlesubmit}>
     
      <input
        type="text"
        className="input-search"
        value={commentText}
        placeholder="Enter text"
        onChange={(event) => setCommentText(event.target.value)}
      />
      <button className="search-button">Add Comment</button>{" "}
    </form>
  );
};

export default CommentForm;
