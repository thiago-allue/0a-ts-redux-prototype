## **React-Redux TypeScript Example**

## **Problem Statement**

Simpliest Redux with a React application using TypeScript. The primary goal is to demonstrate the fundamental concepts of state management in React applications using Redux. The codebase includes a simple counter application that allows users to increment and decrement a numerical value. 

## **Theoretical Background**

The core principles of Redux include:

*   **Single source of truth**: The state of the entire application is stored in an object tree within a single store.
*   **State is read-only**: The only way to change the state is to emit an action, an object describing what happened.
*   **Changes are made with pure functions**: To specify how the state tree is transformed by actions, you write pure reducers.

In this exercise, we implement these principles through a simple counter application. The counter's value is stored in a Redux store, and two actions (**INCREMENT** and **DECREMENT**) are defined to modify this state. The changes are processed by a reducer function, which determines how the state should be updated in response to each action.

## **Setup**

To get this project up and running on your local machine, follow these steps:

1.  Clone the repository:
2.  Navigate to the project directory:
3.  Install the necessary dependencies

## **Usage**

Start the development server:This will run the app in development mode. 

Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.