import React from "react";
import { cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import renderWithRoute from "./test-utils/renderWithRoute";
import App from "./App";

afterEach(cleanup);

test("should render home page", async () => {
  const { queryByTestId } = renderWithRoute(<App />, "/");

  const navigationNode = queryByTestId("navigation");
  expect(navigationNode).toBeInTheDocument();

  const homeNode = queryByTestId("home");
  expect(homeNode).toBeInTheDocument();

  const todosNode = queryByTestId("todos");
  expect(todosNode).not.toBeInTheDocument();

  const notFoundNode = queryByTestId("not-found");
  expect(notFoundNode).not.toBeInTheDocument();
});

test("should render todos page", () => {
  const { queryByTestId } = renderWithRoute(<App />, "/todos");

  const navigationNode = queryByTestId("navigation");
  expect(navigationNode).toBeInTheDocument();

  const homeNode = queryByTestId("home");
  expect(homeNode).not.toBeInTheDocument();

  const todosNode = queryByTestId("todos");
  expect(todosNode).toBeInTheDocument();

  const notFoundNode = queryByTestId("not-found");
  expect(notFoundNode).not.toBeInTheDocument();
});

test("should render not found page", () => {
  const { queryByTestId } = renderWithRoute(<App />, "/bad-route");

  const navigationNode = queryByTestId("navigation");
  expect(navigationNode).toBeInTheDocument();

  const homeNode = queryByTestId("home");
  expect(homeNode).not.toBeInTheDocument();

  const todosNode = queryByTestId("todos");
  expect(todosNode).not.toBeInTheDocument();

  const notFoundNode = queryByTestId("not-found");
  expect(notFoundNode).toBeInTheDocument();
});
