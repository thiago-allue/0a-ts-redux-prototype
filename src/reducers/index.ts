/**
 * ROOT REDUCER
 *
 * The root reducer combines all the application's reducers using
 * combineReducers. This combined reducer will then be used to create the
 * Redux store state.
 */

import { combineReducers } from 'redux';
import { counterReducer } from './counterReducers';

// Combine reducers to create a single root reducer
export const rootReducer = combineReducers({
  counter: counterReducer,
});

// Define RootState type based on the rootReducer's return type
export type RootState = ReturnType<typeof rootReducer>;
