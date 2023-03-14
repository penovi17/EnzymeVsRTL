import React from 'react';
import {render, act} from '@testing-library/react';

import useCounter from './useCounter';

test('defaults to initial value = 0', () => {
  let result
  const FakeComponent = () => {
    result = useCounter()
    return null;
  }
  render(<FakeComponent/>);

  expect(result.counter).toBe(0);
});

test('exposes correct initial value, increments and decrements', () => {
  const initialValue = 5;
  let result
  const FakeComponent = () => {
    result = useCounter({initialValue})
    return null;
  }
  render(<FakeComponent/>);

  expect(result.counter).toBe(initialValue);

  act(() => result.increment());
  expect(result.counter).toBe(initialValue + 1);
  
  act(() => result.decrement());
  expect(result.counter).toBe(initialValue);
});