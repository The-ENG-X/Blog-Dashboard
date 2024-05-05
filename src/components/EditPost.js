import React, { useState } from 'react';

const EditPost = ({ match }) => {
  const postId = match.params.id; // Get post ID from route params
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch post data based on postId and set title and content

  const handleSubmit = event => {
    event.preventDefault();
    // Example: Update post data on server or update local state
    console.log('Edited:', { postId, title, content });
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPost;
