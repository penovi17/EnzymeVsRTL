import React from 'react';

import useCounter from './useCounter'
import Button from '../../Button';

function App() {
  const { counter, increment, decrement } = useCounter({initialValue: 0});
  return (
    <div>
      <Button onClick={decrement}> - </Button>
      <p>Count: {counter}</p>
      <Button onClick={increment}> + </Button>
    </div>
  );
}

export default App;
