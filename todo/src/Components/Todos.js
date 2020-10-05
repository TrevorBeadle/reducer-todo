import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";

export default function Todos(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="todos">
      <ul>
        {state.map(todo => {
          return (
            <li
              className={todo.completed ? "completed" : ""}
              key={todo.id}
              onClick={() =>
                dispatch({ type: "TOGGLE_COMPLETED", id: todo.id })
              }
            >
              {todo.item}
            </li>
          );
        })}
      </ul>
      <button onClick={() => dispatch({ type: "REMOVE_TODO" })}>
        Remove Completed
      </button>
    </div>
  );
}
