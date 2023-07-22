import React, { memo } from 'react';
import SinglePostShow from '../SinglePostShow/SinglePostShow';
import styles from './PostShowStyle.module.css';

function PostShow(props) {
  const postComponents = props.postsToShow.map((post, index) => (
    <SinglePostShow
      key={index}
      title={post.title}
      content={post.content}
      comments={post.comments}
      search={props.search}
    />
  ));
  
  return (
    <div>
      <div className={styles.PostShow}>{postComponents}</div>
    </div>
  )
}



export default memo(PostShow);
