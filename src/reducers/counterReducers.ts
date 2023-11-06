/**
 * COUNTER REDUCER
 *
 * The reducer specifies how the application's state changes in response
 * to actions sent to the store. This counterReducer handles actions
 * related to the counter feature.
 */

import { INCREMENT, DECREMENT } from '../actions/counterActions';

// Define the initial state shape for the counter feature
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// Reducer function to handle counter actions
export const counterReducer = (
  state = initialState,
  action: any
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      // Handle increment action
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      // Handle decrement action
      return { ...state, value: state.value - 1 };
    default:
      // Return the existing state unchanged
      return state;
  }
};
