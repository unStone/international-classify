import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as reducer from '../reducers/index';

// import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger();

var store = createStore(
  combineReducers(reducer),
  compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

export default store;