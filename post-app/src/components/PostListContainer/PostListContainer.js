import React, { Component } from 'react';
import styles from './PostListContainerStyle.module.css';
import PostList from '../PostList/PostList';
import { averageRatesArray } from '../../helpers/averageRatesArray';
import { pool } from '../../helpers/postsObject';

class PostListContainer extends Component {
  state = {
    averageRatesArray,
  };

  updateAverageRatesArray = (index) => {
    this.setState(
      ({ averageRatesArray }) => {
        const averageRatesArrayCopy = [...averageRatesArray];
        averageRatesArrayCopy[index] = -1;
        return {
          averageRatesArray: averageRatesArrayCopy,
        };
      },);
  };

  updateAverageRatesInRemove = (averageRate, removingPostIndexFromPool) => {
    this.setState(
      ({ averageRatesArray }) => {
        const averageRatesArrayCopy = [...averageRatesArray];
        averageRatesArrayCopy[removingPostIndexFromPool] = averageRate;
        return {
          averageRatesArray: averageRatesArrayCopy,
        };
      },);
  };

  updateAverageRatesInClear = (clearingPostsIndexes) => {
    this.setState(
      ({ averageRatesArray }) => {
        const averageRatesArrayCopy = [...averageRatesArray];
        clearingPostsIndexes.forEach((index) => {
          averageRatesArrayCopy[index] = pool[index].averageRate;
        });
        return {
          averageRatesArray: [...averageRatesArrayCopy],
        };
      },);
  };

  render() {
    const {
      updateAverageRatesArray,
      updateAverageRatesInRemove,
      updateAverageRatesInClear,
    } = this;

    const { averageRatesArray } = this.state;
    
    return (
      <div className={styles.PostListContainer}>
        <PostList
          listNum={1}
          averageRatesArray={averageRatesArray}
          updateAverageRatesArray={updateAverageRatesArray}
          updateAverageRatesInRemove={updateAverageRatesInRemove}
          updateAverageRatesInClear={updateAverageRatesInClear}
        />
        <PostList
          listNum={2}
          averageRatesArray={averageRatesArray}
          updateAverageRatesArray={updateAverageRatesArray}
          updateAverageRatesInRemove={updateAverageRatesInRemove}
          updateAverageRatesInClear={updateAverageRatesInClear}
        />
      </div>
    );
  }
}

export default PostListContainer;
