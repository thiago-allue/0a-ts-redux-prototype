/**
 * ACTION TYPES AND CREATORS
 *
 * This file defines the action types and creators for the counter feature.
 * Actions are payloads of information that send data from the application
 * to the store.
 */

// Define action types as string constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action creator for incrementing the counter
export const increment = () => ({ type: INCREMENT });

// Action creator for decrementing the counter
export const decrement = () => ({ type: DECREMENT });
