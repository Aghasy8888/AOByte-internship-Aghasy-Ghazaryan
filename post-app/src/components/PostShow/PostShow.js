import React, { memo, useState } from 'react';
import SinglePostShow from '../SinglePostShow/SinglePostShow';
import Pagination from '../Pagination/Pagination';
import styles from './PostShowStyle.module.css';


function PostShow({postsToShow, search}) {
  const postsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postsToShow.slice(firstPostIndex, lastPostIndex);

  const postComponents = currentPosts.map((post, index) => (
    <SinglePostShow
      key={index}
      title={post.title}
      content={post.content}
      comments={post.comments}
      search={search}
    />
  ));

  
  
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
