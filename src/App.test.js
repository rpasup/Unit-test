import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Product List/i);
  expect(linkElement).toBeInTheDocument();
});
