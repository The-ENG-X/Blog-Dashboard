import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Example: Send form data to server or update local state
    console.log('Submitted:', { title, content });
    // Clear form fields after submission
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
