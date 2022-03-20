import React from "react";

const Todolist = (props) => (
  <div>
    <ul>
      {props.todoList.map((todo, index) => (
        <li key={index}>{todo.name}</li>
      ))}
    </ul>
  </div>
);
export default Todolist;
