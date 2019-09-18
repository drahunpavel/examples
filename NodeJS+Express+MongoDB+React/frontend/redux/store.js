import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import data from '../reducers/rdPostList';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancer(applyMiddleware(thunk));

const reducer = combineReducers({
    data
});

const store = createStore(reducer, middleware);

export default store;