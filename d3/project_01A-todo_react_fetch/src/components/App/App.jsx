import React, { useState, useEffect } from "react";
import TodoList from "../TodoList/TodoList.jsx";

import { v4 as uuidv4 } from "uuid";

import styles from "./App.module.css";

// ES6 Destructurization

// useState()
// React.useState

// Destukturyzacja tablic

// const cars = ['Mercedes', 'Audi', 'BMW'];
// console.log(cars[0]) // Audi
// console.log(cars[1]) // Mercedes

// const mercedes = cars[0]
// const audi = cars[1]

// const [mercedes, audi, bmw] = cars

// To jest zle, bo liczy sie index z tablicy bazowej

// const [audi, bmw] = cars

// Destrukturyzacja obiektow

// const person = {
//   name: 'Damian',
//   city: Warsaw,
//   shoe: 43
// };

// console.log(person.name)
// console.log(person.city)

// const { name } = person;
// console.log(name) //person.name

// const { name : differentValue } = person

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  //##################################################

  const list = document.querySelector("#list");

  fetch("http://localhost:3003/todos")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((todos) => {
      // console.log(cars);

      //tutaj sie powinno zadziac dodanie samochodu do HTML
      todos.forEach((todo) => {
        list.innerHTML += `<li>${todo.Name}</li>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    // nullish operator ?? []
    //##################################################
    const todosFromLS = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(todosFromLS);
  }, []);

  /////////////////////////////
  const saveTodos = (todosToSave) => {
    setTodos(todosToSave);
    // todos bedzie jeszcze stare !!
    //###################################################
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // walidacja
    if (inputValue.length < 2) {
      setIsErrorMessage(true);
      return;
    }

    const changedTodos = [
      ...todos,
      {
        id: uuidv4(),
        name: inputValue,
        checked: false,
      },
    ];

    saveTodos(changedTodos);
    // wykonaj funkcje handleTaskFinished
    // funkcja powinna zmieniac wartosc klucza checked tylko dla elementy kliknietego
    // nowa tablica po tej zmianie zapisz za pomoca funkcji setTodos

    // czyszczenie formularza
    setInputValue("");
  };

  const handleTaskFinished = (id) => {
    console.log(id);
    // function isCompleted(todo) {
    //   return todo == "checked";
    // }
    // todos.findIndex(isCompleted);
    // console.log(todos.findIndex(isCompleted));

    const indexOfChangeElement = todos.findIndex((todo) => todo.id === id);

    // sprytne uzycie spread operator zeby zrobic kopie tablicy

    const changedTodos = [...todos];

    //aktualnie klikniety obiekt
    console.log(todos[indexOfChangeElement]);

    todos[indexOfChangeElement].checked = !todos[indexOfChangeElement].checked;
    // setTodos(changedTodos);
    // localStorage.setItem("todos", JSON.stringify(changedTodos));

    saveTodos(changedTodos);
  };

  const handleRemove = (id) => {
    // usunac element z tablicy
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(filteredTodos);
    // localStorage.setItem("todos", JSON.stringify(filteredTodos));
    // // setTodos(tablicaBezTegoElementu)
    saveTodos(filteredTodos);
  };

  console.log(todos);

  return (
    <div>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">send todo</button>
        {isErrorMessage ? <p className={styles.error}>Za malo znaków. Minimum 3</p> : null}
      </form>
      <TodoList todoList={todos} onRemove={handleRemove} onFinish={handleTaskFinished} />
    </div>
  );
};

export default App;
