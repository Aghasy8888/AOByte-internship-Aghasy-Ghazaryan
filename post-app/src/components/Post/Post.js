import React, { PureComponent } from 'react';
import { Button } from 'react-bootstrap';
import styles from './PostStyle.module.css';

class Post extends PureComponent {
  render() {
    const { title, content, rating, removePost, id } = this.props;
    return (
      <div className={styles.singlePostContainer}>
        <h3>{title}</h3>
        <div>{content}</div>
        <div className={styles.buttonRate}>
          <div className={styles.averageRate}>{rating}</div>
          <Button onClick={() => removePost(id, rating)}>-</Button>
        </div>
      </div>
    );
  }
}

export default Post;
