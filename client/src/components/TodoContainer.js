import React, { useEffect, useState} from "react"
import { Todo } from "./Todo";
import { TodoInput } from "./TodoInput";
import { EditTodo } from "./EditTodo";

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async id => {
    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  useEffect(() => {
    getTodos();
  }, []);
 
  return (
    <div className="TodoContainer">
      <h1>Todo App</h1>
      <TodoInput/>
      {todos.map((todo) => 
        todo.isEditing ? (
          <EditTodo
          key={todo.id} 
          editTodo={editTask} 
          todo={todo}/>
        ) : (
        <Todo 
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />
      ))}
    </div>
  );
};
