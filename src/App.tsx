import * as React from 'react';

import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Counter</h1>
      </header>
      <Counter />
    </div>
  );
};

export default App;
