import React from "react";
import Todolist from "../Todolist/Todolist";

const App = () => (
  <div>
    <h1>Todo List</h1>
    <form>
      <input type="text" placeholder="Write todo" />
      <button type="submit">send todo</button>
    </form>
    <Todolist />
  </div>
);

export default App;
