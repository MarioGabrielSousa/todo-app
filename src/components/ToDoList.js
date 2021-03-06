import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
