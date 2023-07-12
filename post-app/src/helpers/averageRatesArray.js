import findAverage from './findAverage';
import idGenerator from './idGenarator';
import { pool } from './postsObject';

export const averageRatesArray = pool.map((post) => {
  const ratingArray = post.comments.map((comment) => comment.rating);

  post.averageRate = findAverage(ratingArray);
  post.id = idGenerator();
  post.parent = null;

  return findAverage(ratingArray);
});

export const averageRatesArrayCopy = [...averageRatesArray];
