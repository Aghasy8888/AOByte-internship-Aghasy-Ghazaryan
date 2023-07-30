import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SinglePostShow from '../SinglePostShow/SinglePostShow';
import Pagination from '../Pagination/Pagination';
import { getPosts } from '../../store/postActions';
import styles from './PostShowStyle.module.css';

function PostShow({ search }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const postsToShow = useSelector((state) => state.postReducer.postsToShow);
  const postsPerPage = 1;  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postsToShow.slice(firstPostIndex, lastPostIndex); 

  useEffect(()=> {
    dispatch(getPosts());      
  }, [])

  const postComponents = currentPosts.map((post, index) => (
    <SinglePostShow
      key={index}
      title={post.title}
      content={post.content}
      comments={post.comments}
      search={search}
    />
  ))
  
  return (
    <div className={styles.postShowContainer}>
      <div className={styles.postShow}>{postComponents}</div>
      
      <Pagination 
      postsPerPage={1}
      total={postsToShow.length}
      handlePageChange={(page) => setCurrentPage(page)}
      currentPage={currentPage}
      />
    </div>
  )
}

export default memo(PostShow);
