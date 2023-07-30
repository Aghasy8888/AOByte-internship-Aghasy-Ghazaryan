
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import postReducer from './reducers/postReducer';

const middlewaresArr = [thunk];
if(process.env.NODE_ENV === "development"){
    middlewaresArr.push(logger);
}

const middlewares = applyMiddleware(...middlewaresArr);

const mainReducer = combineReducers({
    postReducer,
});

export const store = createStore(mainReducer, middlewares);