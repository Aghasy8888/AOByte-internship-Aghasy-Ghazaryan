import React, { memo, useState } from 'react';
import PostList from '../PostList/PostList';
import { averageRatesArray as  averageRatesArrayData} from '../../helpers/averageRatesArray';
import { pool } from '../../data/postsObject';
import styles from './PostListContainerStyle.module.css';

function PostListContainer(props) {
  const [averageRatesArray, setAverageRatesArray] = useState(averageRatesArrayData);

  const updateAverageRatesArray = (index) => {
    setAverageRatesArray((prevAverageRatesArray) => {
      const averageRatesArrayCopy = [...prevAverageRatesArray];
      averageRatesArrayCopy[index] = -1;

      return averageRatesArrayCopy;
    })
  };

  const updateAverageRatesInRemove = (averageRate, removingPostIndexFromPool) => {
    setAverageRatesArray((prevAverageRatesArray) => {
      const averageRatesArrayCopy = [...prevAverageRatesArray];
      averageRatesArrayCopy[removingPostIndexFromPool] = averageRate;

      return averageRatesArrayCopy;
    })
  };

  const updateAverageRatesInClear = (clearingPostsIndexes) => {
    setAverageRatesArray((prevAverageRatesArray) => {
      const averageRatesArrayCopy = [...prevAverageRatesArray];
      clearingPostsIndexes.forEach((index) => {
        averageRatesArrayCopy[index] = pool[index].rating;
      });

      return [...averageRatesArrayCopy];
    })
  };
  
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
  )
}



export default memo(PostListContainer) ;
