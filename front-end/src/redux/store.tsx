// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import {rootReducer} from './rootReducer';

// export const middlewares = [thunk];
// if (process.env.NODE_ENV === 'development') {
// //   middlewares.push(logger);
// }

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export default store;
// import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import userReducer from './user/userReducer';
import postReducer from './post/postReducer';

export const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
}

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  });

const store = createStore(rootReducer, applyMiddleware(...middlewares));
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch

  export default store;