import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import Todos from "./Todos";

afterEach(cleanup);

test("should start with empty list", () => {
  const { getByTestId } = render(<Todos />);

  const todosListNode = getByTestId("todos-list")
  expect(todosListNode.hasChildNodes()).toBe(false)
});

test("should not add blank item to list", () => {
  const { getByPlaceholderText, getByTestId } = render(<Todos />);

  const todosEntryNode = getByPlaceholderText("Add todo...")

  enterValueAndPressEnter(todosEntryNode, "")

  const todosListNode = getByTestId("todos-list")
  expect(todosListNode.hasChildNodes()).toBe(false)
});

test("should add items to list", () => {
  const { getByPlaceholderText, getByLabelText } = render(<Todos />);

  const todosEntryNode = getByPlaceholderText("Add todo...")

  enterValueAndPressEnter(todosEntryNode, "Learn to test")
  enterValueAndPressEnter(todosEntryNode, "Practice")
  enterValueAndPressEnter(todosEntryNode, "Keep trying")

  expect(getByLabelText("Learn to test").checked).toBe(false)
  expect(getByLabelText("Practice").checked).toBe(false)
  expect(getByLabelText("Keep trying").checked).toBe(false)
});

test("should check item to list", () => {
  const { getByPlaceholderText, getByLabelText } = render(<Todos />);

  const todosEntryNode = getByPlaceholderText("Add todo...")

  enterValueAndPressEnter(todosEntryNode, "Learn to test")
  enterValueAndPressEnter(todosEntryNode, "Practice")
  enterValueAndPressEnter(todosEntryNode, "Keep trying")

  const practiceNode = getByLabelText("Practice")

  fireEvent.click(practiceNode)

  expect(getByLabelText("Learn to test").checked).toBe(false)
  expect(practiceNode.checked).toBe(true)
  expect(getByLabelText("Keep trying").checked).toBe(false)
});

test("should delete item from list", () => {
  const { getByPlaceholderText, getAllByText, queryByLabelText } = render(<Todos />);

  const todosEntryNode = getByPlaceholderText("Add todo...")

  enterValueAndPressEnter(todosEntryNode, "Learn to test")
  enterValueAndPressEnter(todosEntryNode, "Practice")
  enterValueAndPressEnter(todosEntryNode, "Keep trying")

  const removeButtons = getAllByText("(remove)")

  fireEvent.click(removeButtons[1])

  expect(queryByLabelText("Learn to test")).toBeInTheDocument()
  expect(queryByLabelText("Practice")).not.toBeInTheDocument()
  expect(queryByLabelText("Keep trying")).toBeInTheDocument()
});

const enterValueAndPressEnter = (node, value) =>{
  fireEvent.change(node, { target: { value } })

  fireEvent.keyPress(node, {
    charCode: 13
  })
}