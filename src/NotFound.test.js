import React from "react";
import { render, cleanup } from "@testing-library/react";
import NotFound from "./NotFound";

afterEach(cleanup);

test("should render not found component", () => {
  const { container } = render(<NotFound />);
  expect(container).toMatchSnapshot();
});
