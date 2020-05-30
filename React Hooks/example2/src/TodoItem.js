import React, { useState, useContext } from "react";
import { Context } from "./context";

export default function TodoItem({ title, id, completed }) {
  // const [checked, setChecked] = useState(completed);
  // const { removeTodo, toggleTodo } = useContext(Context); //получаем из контекста функции, которые передавали
  const { dispatch } = useContext(Context); //получаем из контекста функции, которые передавали

  const cls = ["todo"];

  if (completed) cls.push("completed");

  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({ type: "toggle", payload: id })}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() => dispatch({ type: "remove", payload: id })}
        >
          delete
        </i>
      </label>
    </li>
  );
}
