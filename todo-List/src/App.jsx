import { useState, useEffect } from "react";
import AddTodoInput from "./components/addTodoInput";
import TodoList from "./components/todoList";
import "./App.scss";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setList(data.todos));
  }, []);

  return (
    <div className="App">
      <h1>Todo-List App</h1>
      <AddTodoInput setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;
