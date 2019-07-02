import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import renderWithRoute from "./test-utils/renderWithRoute";
import Navigation from "./Navigation";

afterEach(cleanup);

test("should have home not as link when on home route", async () => {
  const { getByText } = renderWithRoute(<Navigation />, "/");

  const navigationNode = getByText("Home");
  expect(navigationNode).toMatchSnapshot();
});

test("should have home as link when not on home route", async () => {
  const { getByText } = renderWithRoute(<Navigation />, "/not-home");

  const navigationNode = getByText("Home");
  expect(navigationNode).toMatchSnapshot();
});

test("should change route to home route when home link clicked", async () => {
  const { getByText, history } = renderWithRoute(<Navigation />, "/not-home");

  const navigationNode = getByText("Home");
  fireEvent.click(navigationNode);
  expect(history.location.pathname).toBe("/");
});

test("should have todos example not as link when on todos route", async () => {
  const { getByText } = renderWithRoute(<Navigation />, "/todos");

  const navigationNode = getByText("Todos Example");
  expect(navigationNode).toMatchSnapshot();
});

test("should have todos example as link when not on todos route", async () => {
  const { getByText } = renderWithRoute(<Navigation />, "/not-todos");

  const navigationNode = getByText("Todos Example");
  expect(navigationNode).toMatchSnapshot();
});

test("should change route to todos route when todos link clicked", async () => {
  const { getByText, history } = renderWithRoute(<Navigation />, "/not-todos");

  const navigationNode = getByText("Todos Example");
  fireEvent.click(navigationNode);
  expect(history.location.pathname).toBe("/todos");
});
