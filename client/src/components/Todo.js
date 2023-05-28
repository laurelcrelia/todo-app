import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export const Todo = ({id, task, deleteTodo}) => {
  return (
    <div className="Todo">
        {task}
        <div className="trash-icon">
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(id)} />
        </div>
    </div>
  );
};
