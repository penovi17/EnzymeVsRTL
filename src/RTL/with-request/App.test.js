
import { render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import App from './App';

const initialValue = 4;
jest.mock('./getCounterData', () => new Promise(res => res(4)));

test('correctly loads initial value', async () => {
  render(<App/>);
  await waitFor (() => 
    screen.getByText(new RegExp(`count: ${initialValue}`, "i"))
  );
});
