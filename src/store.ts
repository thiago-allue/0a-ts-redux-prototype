/**
 * REDUX STORE
 *
 * The store is a centralized state manager that holds the application's
 * state. This file creates the store using the root reducer, which combines
 * all other reducers.
 */

import { createStore } from 'redux';
import { rootReducer } from './reducers';

// Create the Redux store with the root reducer
export const store = createStore(rootReducer);
