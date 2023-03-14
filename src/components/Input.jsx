import React, { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newInputText = event.target.value;
    setInputText(newInputText);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onClick(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
