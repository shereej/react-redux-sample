import {createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//data - static
import comments from './data/comments';
import posts from './data/posts';

// create an object for default data
const defaultState = {
    posts,
    comments
}

//create store
const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(hashHistory, store);

export default store;
