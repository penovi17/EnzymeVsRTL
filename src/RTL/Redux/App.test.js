import React from "react";
import {Provider} from "react-redux";
import {render as renderRTL, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App, {store} from "./App";

const render = (ui, options) => {
  const Wrapper = ({children}) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return renderRTL(ui, {wrapper: Wrapper, ...options});
};

test("renders two buttons and a paragraph - RTL", () => {
  render(<App />);
  screen.getByRole("button", {name: /-/});
  screen.getByRole("button", {name: /\+/});
  screen.getByText(/count: 0/i);
});

test("correctly increments and decrements - RTL", () => {
  render(<App />);
  const decrementButton = screen.getByRole("button", {name: /-/});
  const incrementButton = screen.getByRole("button", {name: /\+/});
  // INITIAL VALUE
  screen.getByText(/count: 0/i);

  // INCREMENT
  userEvent.click(decrementButton);
  screen.getByText(/count: -1/i);

  // DECREMENT
  userEvent.click(incrementButton);
  screen.getByText(/count: 0/i);
});
