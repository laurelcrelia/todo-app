import React, {useState} from 'react'

export const TodoInput = () => {
    const [description, setDescription] = useState("");

    const addTodo = async e => {
        e.preventDefault();
        try {
        const body = { description };
        const response = await fetch("http://localhost:3000/api/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        window.location = "/";
        } catch (err) {
        console.error(err.message);
        }
    };
  return (
    <form className="TodoInput" onSubmit={addTodo}>
    <input
      type="text"
      className="todo-input"
      placeholder="Task"
      value={description}
      onChange={e => setDescription(e.target.value)}
    />
    <button className="todo-btn">Add</button>
  </form>
  );
};
