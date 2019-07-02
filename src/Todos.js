import React, { useState } from "react";
import "./Todos.css";

const NewTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <input
      type="text"
      placeholder="Add todo..."
      value={todo}
      onChange={event => setTodo(event.target.value)}
      onKeyPress={event => {
        if (event.key === "Enter" && todo) {
          addTodo(todo);
          setTodo("");
        }
      }}
    />
  );
};

const Todo = ({ todo, removeTodo }) => {
  const [done, setDone] = useState(false);
  return (
    <li className="Todos-todo">
      <label>
        <input type="checkbox" value={done} onChange={setDone} />
        {todo}
      </label>
      <button className="Todos-todo-remove-button" onClick={removeTodo}>
        (remove)
      </button>
    </li>
  );
};

const Todos = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div data-testid="todos">
      <NewTodo addTodo={todo => setTodos([...todos, todo])} />
      <ul data-testid="todos-list" className="Todos-todos">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            removeTodo={() =>
              setTodos(
                todos.filter((_, removedIndex) => index !== removedIndex)
              )
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
