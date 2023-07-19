import React, { PureComponent } from 'react';
import styles from './PostShowStyle.module.css';
import { pool } from '../../data/postsObject';
import SinglePostShow from '../SinglePostShow/SinglePostShow';
import Search from '../Search/Search';

class PostShow extends PureComponent {
  state = {
    postsToShow: pool,
    search: '',
  };

  getFoundPosts = (foundPosts, search) => {
    this.setState({
      postsToShow: foundPosts,
      search,
    });
  };

  render() {
    const { postsToShow, search} = this.state;
    const postComponents = postsToShow.map((post, index) => (
      <SinglePostShow
        key={index}
        title={post.title}
        content={post.content}
        comments={post.comments}
        search={search}
      />
    ));
    return (
      <div>
        <div>
          <Search getFoundPosts={this.getFoundPosts} />
        </div>
        <div className={styles.PostShow}>{postComponents}</div>
      </div>
    );
  }
}

export default PostShow;
