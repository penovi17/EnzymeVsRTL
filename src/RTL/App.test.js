import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";

// TESTING LIBRARY
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
