import React from "react";

export default function Todo({ todo, toggle }) {
  return (
    <li
      className={todo.completed ? "completed" : ""}
      key={todo.id}
      onClick={toggle}
    >
      {todo.item}
    </li>
  );
}
