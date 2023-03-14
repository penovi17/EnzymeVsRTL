import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Button from '../Button';

test('renders two buttons and a paragraph - Enzyme', () => {
  const wrapper = shallow(<App/>);
  const buttons = wrapper.find(Button);
  const paragraph = wrapper.find('p');

  expect(buttons).toHaveLength(2);
  expect(buttons.at(0).prop('children')).toBe(' - ');
  expect(buttons.at(1).prop('children')).toBe(' + ');
  expect(paragraph).toHaveLength(1);
  expect(paragraph.text()).toBe('Count: 0');
});

test('correctly increments and decrements - Enzyme', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  let initialValue
  useStateSpy.mockImplementation((init) => {
    initialValue = init;
    return [init, setState]
  });

  const wrapper = shallow(<App/>);
  const buttons = wrapper.find(Button);
  const decrementButton = buttons.at(0);
  const incrementButton = buttons.at(1); 

  decrementButton.props().onClick();
  expect(setState).toHaveBeenCalledTimes(1);
  expect(setState).toHaveBeenLastCalledWith(initialValue - 1);

  incrementButton.props().onClick();
  expect(setState).toHaveBeenCalledTimes(2);
  expect(setState).toHaveBeenLastCalledWith(initialValue + 1);
});