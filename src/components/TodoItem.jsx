import React, { useState } from "react";

function TodoItem(props) {
  let [isDone, setIsDone] = useState(false);

  function done() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <li
        style={{ textDecoration: isDone ? "line-through" : "none" }}
        onClick={done}
      >
        {props.name}
      </li>
      <span
        onClick={() => {
          props.onChek(props.id);
        }}
        style={{ cursor: "pointer" }}
      >
        x
      </span>
    </div>
  );
}

export default TodoItem;
