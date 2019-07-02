import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "./Home";

afterEach(cleanup);

test("should render home component", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
