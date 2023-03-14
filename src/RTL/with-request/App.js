import React, { useEffect, useState } from 'react';

import getCounterData from './getCounterData'; 
import Button from '../../Button';


function App() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getCounterData
    .then(counterValue => {
      setCounter(counterValue);
    }) 
    .catch(console.error)
    .finally(() => {
      setLoading(false);
    })
  }, [])

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <div>
      {loading ? 
        "Loading..." :
        (
          <>
            <Button onClick={decrement}> - </Button>
            <p>Count: {counter}</p>
            <Button onClick={increment}> + </Button>
          </>
        )}
    </div>
  );
}

export default App;
