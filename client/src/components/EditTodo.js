import React, {useState} from "react"

export const EditTodo = ({todo, editTodo}) => {
  const [description, setDescription] = useState(todo.description);

  const submitChanges = async e => {
    e.preventDefault();
    try {
    const body = {description}
    const response = await fetch(`http://localhost:3000/api/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    window.location = "/";
    } catch (err) {
    console.error(err.message);
    }
};

 return (
    <form className="TodoInput" onSubmit={submitChanges}>
    <input
      type="text"
      className="todo-input"
      placeholder="Task"
      value={description}
      onChange={e => setDescription(e.target.value)}
    />
    <button className="todo-btn">Edit</button>
  </form>
  );
};