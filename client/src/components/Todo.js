import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons"

export const Todo = ({todo, deleteTodo, editTodo}) => {
  return (
    <div className="Todo">
      {todo.description}
      <div>
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)} />
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};
