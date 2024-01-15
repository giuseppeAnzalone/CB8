import { useState } from "react";
import "./index.scss";

const AddTodoInput = ({ setList }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputInsert = (e) => setInputValue(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      alert("Non hai inserito alcun testo!");
    } else {
      const newItem = {
        id: Math.floor(Math.random() * 10000),
        completed: false,
        userId: Math.floor(Math.random() * 10000),
        todo: inputValue,
      };

      setList((prev) => [newItem, ...prev]);
      setInputValue("");
    }
  };

  return (
    <form className="AddTodoInput" onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        onChange={onInputInsert}
        value={inputValue}
      />
      <button className="btnInput" type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddTodoInput;
