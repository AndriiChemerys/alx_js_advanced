import React, { useState, useEffect } from "react";
import Todolist from "../Todolist/Todolist";
import styles from "./App.module.css";

// <p className={styles.error}></p>

const TODO_ARRAY = [
  {
    name: "Wyniesc smieci",
    checked: false,
  },
  {
    name: "Pryjsc na zajecia",
    checked: true,
  },
];

// ES6 Destructurization

// useState()
// React.useState

// const cars = ['Mercedes', 'Audi', 'BMW'];
// const mercedes = cars[0]
// const audi = cars[1]

// const [mercedes, audi, bmw] = cars

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(TODO_ARRAY);
  // const [errorMessage, setErrorMessage] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  // let todosStorage = JSON.parse(localStorage.getItem("todos"));

  // 1. Obsluga todos z localstorage
  useEffect(() => {
    //nullish operator
    const todosFromLS = JSON.parse(localStorage.getItem("todos") ?? []);
    setTodos(todosFromLS);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 2) {
      // alert("Alert");
      setIsErrorMessage(true);
      return;
    }

    const newTodos = [
      ...todos,
      {
        name: inputValue,
        checked: false,
      },
    ];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos([
      ...todos,
      {
        name: inputValue,
        ckecked: false,
      },
    ]);

    // const newTodos = todos.concat({
    //   name: inputValue,
    //   checked: false,
    // });

    setInputValue("");
  };

  console.log(inputValue);

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Write todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">send todo</button>
        {isErrorMessage ? <p className={styles.error}>Za malo znakow. Minimum 3</p> : null}
      </form>
      <Todolist todoList={todos} />
    </div>
  );
};

export default App;
