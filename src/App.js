import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
