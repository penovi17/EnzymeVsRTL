import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'
import Button from '../../Button';

const reducer = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

export const store = createStore(reducer);

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  const increment = () => dispatch({type: 'INCREMENT'});
  const decrement = () => dispatch({type: 'DECREMENT'});
  return (
    <div>
      <Button onClick={decrement}> - </Button>
      <p>Count: {counter}</p>
      <Button onClick={increment}> + </Button>
    </div>
  );
}

const AppWrapper = () => <Provider store={store}><App /></Provider>;
export default AppWrapper;
