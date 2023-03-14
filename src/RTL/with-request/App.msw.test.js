import "whatwg-fetch";
import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import App from "./App";
import {setupServer} from "msw/node";
import {rest} from "msw";

const initialValue = 4;
const server = setupServer(
  rest.get("/getInitialData", (req, res, ctx) => {
    return res(
      ctx.json({
        current: {
          counterValue: `${initialValue}`,
        },
      })
    );
  })
);

beforeAll(() => server.listen({onUnhandledRequest: "error"}));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("correctly loads initial value", async () => {
  render(<App />);
  await waitFor(() =>
    screen.getByText(new RegExp(`count: ${initialValue}`, "i"))
  );
});
