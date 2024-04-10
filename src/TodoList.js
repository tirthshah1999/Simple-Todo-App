import React, { useState } from "react";

const TodoList = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoData, setTodoData] = useState(props.todo.name);
  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={todoData}
          onChange={(e) => setTodoData(e.target.value)}
        />
      ) : (
        <li>{props.todo.name}</li>
      )}

      <button
        onClick={() => {
          setIsEditing(!isEditing);
          props.edit(todoData);
        }}
      >
        {isEditing ? "Save" : "Edit"}{" "}
      </button>
      <button onClick={() => props.deleteTodo()}>Delete</button>
      <br />
      <br />
    </div>
  );
};

export default TodoList;
