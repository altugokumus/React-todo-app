import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onClick={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem key={index} id={index} onChek={deleteItem} name={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
