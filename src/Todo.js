import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Task1" },
    { id: 2, name: "Task2" },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const deleteTodo = (todoId) => {
    const remainingTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(remainingTodos);
  };

  const editTodo = (id, newTodo) => {
    const updatedTodo = todos.map(todo => {
        if(todo.id == id){
            todo.name = newTodo;
        }
        return todo;
    })

    setTodos(updatedTodo);
  }

  return (
    <>
      <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
      <button
        onClick={(e) =>
          setTodos([...todos, { id: new Date().getTime(), name: newTodo }])
        }
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            edit={(newTodo) => editTodo(todo.id, newTodo)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todo;
