import { Component } from 'react';
import styles from './PostListStyle.module.css';
import Post from '../Post/Post';
import { pool } from '../../helpers/postsObject';

class PostList extends Component {
  state = {
    postList: [],
    sortMinTOMax: true,
  };

  addPost = (listNum) => {
    const { averageRatesArray, updateAverageRatesArray } = this.props;
    const index = averageRatesArray.indexOf(Math.max(...averageRatesArray));
    pool[index].parent = `List ${listNum}`;

    if (averageRatesArray[index] !== -1) {
      updateAverageRatesArray(index);
      this.setState(({ postList }) => ({
        postList: [...postList, pool[index]],
      }));
    }
  };

  removePost = (id, averageRate) => {
    const { updateAverageRatesInRemove } = this.props;
    const removingPost = pool.find((post) => post.id === id);

    const removingPostIndexFromPool = pool.indexOf(removingPost);

    this.setState((prevState) => {
      const removingPostIndex = prevState.postList.indexOf(removingPost);
      const prevPostListCopy = prevState.postList;
      prevPostListCopy.splice(removingPostIndex, 1);
      const newPostList = prevPostListCopy;
      updateAverageRatesInRemove(averageRate, removingPostIndexFromPool);

      return {
        postList: newPostList,
      };
    });
  };

  clearPostList = (listNum) => {
    const clearingPosts = this.state.postList.filter(
      (post) => post.parent === `List ${listNum}`
    );

    const clearingPostsIds = clearingPosts.map((post) => post.id);

    const clearingPostsIndexes = clearingPostsIds.map((id) => {
      const clearingSinglePost = pool.find((post) => post.id === id);
      return pool.indexOf(clearingSinglePost);
    });

    this.props.updateAverageRatesInClear(clearingPostsIndexes);

    this.setState({
      postList: [],
    });
  };

  handleSort = () => {
    this.setState(({ postList, sortMinTOMax }) => {
      const postListCopy = [...postList];
      if (sortMinTOMax) {
        postListCopy.sort((a, b) => a.averageRate - b.averageRate);
      } else {
        postListCopy.sort((a, b) => b.averageRate - a.averageRate);
      }

      return {
        postList: postListCopy,
        sortMinTOMax: !sortMinTOMax,
      };
    });
  };

  render() {
    const { postList } = this.state;
    const { listNum } = this.props;
    const { removePost, clearPostList, addPost, handleSort } = this;

    const postComponents = postList.map((post) => (
      <Post
        removePost={removePost}
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
        averageRate={post.averageRate}
      />
    ));

    return (
      <div className={styles.postList}>
        <div className={styles.upperContainer}>
          <h3>List {listNum}</h3>
          <div className={styles.buttonContainer}>
            <button onClick={() => addPost(listNum)}>+</button>
            <button onClick={() => clearPostList(listNum)}>Clear</button>
            <button onClick={handleSort}>Sort</button>
          </div>
        </div>
        <div className={styles.postsContainer}>{postComponents}</div>
      </div>
    );
  }
}

export default PostList;
