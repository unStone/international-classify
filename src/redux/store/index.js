import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import * as reducer from '../reducers/index';

const logger = createLogger();

const store = createStore(
  combineReducers(reducer),
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

export default store;
