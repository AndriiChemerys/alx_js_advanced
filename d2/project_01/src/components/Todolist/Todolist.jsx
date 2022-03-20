import React from "react";

const todos = [
  {
    name: "Wyniesc smieci",
    checked: false,
  },
  {
    name: "Pryjsc na zajecia",
    checked: true,
  },
];

const Todolist = () => (
  <div>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.name}</li>
      ))}
    </ul>
  </div>
);
export default Todolist;
