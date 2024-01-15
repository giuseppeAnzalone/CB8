import TodoItem from "../todoItem";
import "./index.scss";

const TodoList = ({ list, setList }) => {
  return (
    <div className="TodoList">
      {list.map((item) => (
        <TodoItem todoData={item} key={item.id} setList={setList} />
      ))}
    </div>
  );
};

export default TodoList;
