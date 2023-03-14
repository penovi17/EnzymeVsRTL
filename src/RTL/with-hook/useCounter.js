import React from 'react';

const useCounter = ({initialValue = 0} = {}) => {
  const [counter, setCounter] = React.useState(initialValue);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return {counter, increment, decrement};
};

export default useCounter;