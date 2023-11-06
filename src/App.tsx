/**
 * MAIN APPLICATION COMPONENT
 *
 * This is the main component of the React application. It serves as the
 * entry point for the component tree. Here, we include the Counter component,
 * which is connected to the Redux store.
 */

import React from 'react';
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
};

export default App;
