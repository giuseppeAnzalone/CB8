import "./index.scss";

const TodoItem = ({ todoData, setList }) => {
  const { id, todo, completed, userId } = todoData;

  const onHandleChange = () => {
    setList((prev) =>
      prev.map((element) => {
        if (element.id === id) {
          return {
            id: id,
            completed: !element.completed,
            userId: userId,
            todo: todo,
          };
        } else {
          return element;
        }
      })
    );
  };

  const onHandleDelete = () => {
    setList((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <li className="TodoItem">
      <div className="ItemCheckText">
        <input type="checkbox" checked={completed} onChange={onHandleChange} />
        <p>{todoData.todo}</p>
      </div>
      <button className="ItemButtonDelete" onClick={onHandleDelete}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
