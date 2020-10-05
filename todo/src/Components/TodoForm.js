import React from "react";

export default function TodoForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="todo">Add a Todo</label>
      <input
        type="text"
        id="todo"
        name="todo"
        onChange={props.onChange}
        value={props.inputValue}
      />
      <button>Submit</button>
    </form>
  );
}
