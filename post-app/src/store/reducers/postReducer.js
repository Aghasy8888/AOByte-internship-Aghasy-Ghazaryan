import * as actionTypes from '../postActionTypes';

const initialState = {
    postsToShow: [],
    search: '',
}


const postReducer = (state = initialState, action) => {
switch (action.type) {
    case actionTypes.GET_POSTS:
        return {
            ...state,
            postsToShow: action.posts,
        }
        break;

    default:
        return state;
}
}

export default postReducer;