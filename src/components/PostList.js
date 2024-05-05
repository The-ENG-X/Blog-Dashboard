import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  // Function to fetch and set posts from some data source
  const fetchPosts = () => {
    // Example: Fetch posts from an API or load from local storage
    const fetchedPosts = [
      { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
      { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
      { id: 3, title: 'Third Post', content: 'This is the content of the third post.' }
    ];
    setPosts(fetchedPosts);
  };

  // Call fetchPosts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
