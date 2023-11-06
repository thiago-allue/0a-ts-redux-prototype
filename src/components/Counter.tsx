/**
 * COUNTER COMPONENT
 *
 * This React component connects to the Redux store and displays the counter
 * value. It dispatches actions to increment or decrement the counter.
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { increment, decrement } from '../actions/counterActions';

export const Counter: React.FC = () => {
  // Access the counter value from the Redux store state
  const count = useSelector((state: RootState) => state.counter.value);
  // Use useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Dispatch increment action on button click */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* Dispatch decrement action on button click */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
