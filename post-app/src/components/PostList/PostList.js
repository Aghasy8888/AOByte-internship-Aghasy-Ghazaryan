import { PureComponent } from 'react';
import { DropdownButton, Dropdown, Button } from 'react-bootstrap';

import Post from '../Post/Post';

import { pool } from '../../data/postsObject';
import { sortOptions, order } from './sortOptions';

import styles from './PostListStyle.module.css';

class PostList extends PureComponent {
  state = {
    postList: [],
    sort: { value: '' },
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

  handleSort = (option) => {
    this.setState({ sort: option });
    this.setState((prevState) => {
      const postListCopy = [...prevState.postList];
      switch (prevState.sort.value) {
        case order.ASCENDING_ORDER:
          postListCopy.sort((a, b) => a.averageRate - b.averageRate);
          break;
        case order.DESCENDING_ORDER:
          postListCopy.sort((a, b) => b.averageRate - a.averageRate);
          break;

        default:
          return prevState;
      }
      return {
        postList: postListCopy,
      };
    });
  };

  render() {
    const { postList, sort } = this.state;
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
            <Button onClick={() => addPost(listNum)}>+</Button>
            <Button onClick={() => clearPostList(listNum)}>Clear</Button>

            <DropdownButton
              disabled={postComponents.length === 0}
              className={styles.dropdownButton}
              variant='outline-primary'
              title={sort.value ? sort.label : 'Sort'}
              id='sort'
            >
              {sortOptions.map((option, index) => (
                <Dropdown.Item
                  key={index}
                  active={sort.value === option.value}
                  onClick={() => handleSort(option)}
                >
                  {option.label}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
        </div>
        <div className={styles.postsContainer}>{postComponents}</div>
      </div>
    );
  }
}

export default PostList;
