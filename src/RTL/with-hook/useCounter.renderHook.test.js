import { renderHook, act } from '@testing-library/react-hooks';

import useCounter from './useCounter';

test('defaults to initial value = 0', () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.counter).toBe(0);
});

test('exposes correct initial value, increments and decrements', () => {
  const initialValue = 5;
  const { result } = renderHook(() => useCounter({initialValue}));

  expect(result.current.counter).toBe(initialValue);

  act(() => result.current.increment());
  expect(result.current.counter).toBe(initialValue + 1);
  
  act(() => result.current.decrement());
  expect(result.current.counter).toBe(initialValue);
});