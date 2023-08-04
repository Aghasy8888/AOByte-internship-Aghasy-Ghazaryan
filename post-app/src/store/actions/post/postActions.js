import { pool as posts}  from '../../../data/postsObject';
import * as actionTypes from './postActionTypes';

const apiUrl = 'https://post-app-ccdba-default-rtdb.firebaseio.com/';

export function getPosts() {
    
    return (dispatch) => {
        dispatch({type: actionTypes.GET_POSTS, posts})
    }
}