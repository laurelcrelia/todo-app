import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

export const Todo = ({task}) => {
 
  return (
    <div className="Todo">
        {task}
        <div>
        <FontAwesomeIcon icon={faCircleCheck} />
        </div>
    </div>
  );
};
