// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

function ToDoList({ todos, toggleCompleted }) {
  return (
    <ul>
      {todos.map(todo => (
        <ToDo todo={todo} toggleCompleted={toggleCompleted} />
      ))}
    </ul>
  );
}

export default ToDoList;
