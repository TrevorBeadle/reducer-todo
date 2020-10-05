import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", item: inputValue });
    setInputValue("");
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Add a Todo</label>
        <input
          type="text"
          id="todo"
          name="todo"
          onChange={onChange}
          value={inputValue}
        />
        <button>Submit</button>
      </form>
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

export default App;
