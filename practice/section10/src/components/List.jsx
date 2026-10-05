import "./List.css";
import { useState } from "react";
import TodoItem from "./TodoItem";
const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChageSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };
  const filteredTodos = getFilteredData();
  return (
    <div className="list">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChageSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todosWrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
        })}
      </div>
    </div>
  );
};

export default List;
