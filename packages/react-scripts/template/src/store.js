// Actions represent the facts about “what happened” and the reducers update the state according to those actions.
// The Store is the object that brings them together.
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import history from './history';
import * as reducers from './reducers';
import { routerMiddleware } from './middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // A reducing function that returns the next state tree
  // given the current state tree and an action to handle.
  combineReducers(reducers),
  composeEnhancers(
    // A store enhancer is a higher-order function that
    // composes a store creator to return a new, enhanced store creator
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
)

export default store;
