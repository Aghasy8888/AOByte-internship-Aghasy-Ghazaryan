import React, { PureComponent } from 'react';
import styles from './PostListContainerStyle.module.css';
import PostList from '../PostList/PostList';
import { averageRatesArray } from '../../helpers/averageRatesArray';
import { pool } from '../../data/postsObject';

class PostListContainer extends PureComponent {
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
          averageRatesArrayCopy[index] = pool[index].rating;
        });
        return {
          averageRatesArray: [...averageRatesArrayCopy],
        };
      },);
  };

  render() {
    const { averageRatesArray } = this.state;
    
    return (
      <div className={styles.PostListContainer}>
        <PostList
          listNum={1}
          averageRatesArray={averageRatesArray}
          updateAverageRatesArray={this.updateAverageRatesArray}
          updateAverageRatesInRemove={this.updateAverageRatesInRemove}
          updateAverageRatesInClear={this.updateAverageRatesInClear}
        />
        <PostList
          listNum={2}
          averageRatesArray={averageRatesArray}
          updateAverageRatesArray={this.updateAverageRatesArray}
          updateAverageRatesInRemove={this.updateAverageRatesInRemove}
          updateAverageRatesInClear={this.updateAverageRatesInClear}
        />
      </div>
    );
  }
}

export default PostListContainer;
