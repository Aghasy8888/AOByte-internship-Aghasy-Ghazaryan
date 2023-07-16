import React, { Component } from 'react';
// import styles from './PostAppStyle.module.css'
import PostListContainer from '../PostListContainer/PostListContainer';
import PostShow from '../PostShow/PostShow';

class PostApp extends Component {
  render() {
    return (
      <div>
      
        <PostShow />
        <PostListContainer />
      </div>
    );
  }
}

export default PostApp;
