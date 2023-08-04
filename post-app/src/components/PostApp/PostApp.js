import React, { useState } from 'react';
import PostListContainer from '../PostListContainer/PostListContainer';
import PostShow from '../PostShow/PostShow';
import Search from '../Search/Search';
import { pool } from '../../data/postsObject';

 function PostApp() {
  const [postsToShow, setPostsToShow] = useState(pool);
  const [search, setSearch] = useState('');
  
  const getFoundPosts = (foundPosts, search) => {
    setPostsToShow(foundPosts);
    setSearch(search);
  };

  return (
    <div>  
      <Search getFoundPosts={getFoundPosts}/>    
      <PostShow postsToShow={postsToShow} search={search}/>
      <PostListContainer />
    </div>
  );
}

export default PostApp;
