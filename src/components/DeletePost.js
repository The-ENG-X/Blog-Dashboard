import React from 'react';

const DeletePost = ({ match }) => {
  const postId = match.params.id; // Get post ID from route params

  const handleDelete = () => {
    // Example: Send request to delete post on server
    console.log('Deleted:', postId);
  };

  return (
    <div>
      <h1>Delete Post</h1>
      <p>Are you sure you want to delete this post?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeletePost;
