import React from "react";

const Todolist = (props) => {
  if (!Array.isArray(props.todoList) || props.todoList.length === 0) return null;
  return (
    <div>
      <ul>
        {props.todoList.map((todo, index) => (
          <li key={index}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Todolist;
