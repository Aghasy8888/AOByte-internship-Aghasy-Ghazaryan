import React, { Component } from 'react';
import styles from './PostStyle.module.css';

class Post extends Component {
  render() {
    const { title, content, averageRate, removePost, id } = this.props;
    return (
      <div className={styles.singlePostContainer}>
        <h3>{title}</h3>
        <div>{content}</div>
        <div className={styles.buttonRate}>
          <div className={styles.averageRate}>{averageRate}</div>
          <button onClick={() => removePost(id, averageRate)}>-</button>
        </div>
      </div>
    );
  }
}

export default Post;
