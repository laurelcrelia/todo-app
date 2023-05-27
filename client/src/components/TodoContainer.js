import React, { useEffect, useState} from "react"
import { Todo } from "./Todo";
import { TodoInput } from "./TodoInput";

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getTodos();
  }, []);
 
  return (
    <div className="TodoContainer">
      <h1>Todo App</h1>
      <TodoInput/>
      {todos.map((todo) => (
        <Todo 
        key={todo.id}
        task={todo.description} />
      ))}
    </div>
  );
};
