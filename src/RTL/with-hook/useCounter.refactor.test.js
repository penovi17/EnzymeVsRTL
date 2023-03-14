import React from 'react';
import {render, act} from '@testing-library/react';

import useCounter from './useCounter';

const hookSetup = (props = {}) => {
  const result = {};
  const FakeComponent = (props) => {
    result.current = useCounter(props);
    return null;
  }
  render(<FakeComponent {...props}/>);
  return result;
}

test('defaults to initial value = 0', () => {
  const result = hookSetup();
  expect(result.current.counter).toBe(0);
});

test('exposes correct initial value, increments and decrements', () => {
  const initialValue = 5;
  const result = hookSetup({initialValue});

  expect(result.current.counter).toBe(initialValue);

  act(() => result.current.increment());
  expect(result.current.counter).toBe(initialValue + 1);
  
  act(() => result.current.decrement());
  expect(result.current.counter).toBe(initialValue);
});