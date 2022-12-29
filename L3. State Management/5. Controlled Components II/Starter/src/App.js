import logo from "./logo.svg";
import "./App.css";
import InputField from "./InputFiled";
import { useState } from "react";
import ListItems from "./ListItems";
const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <InputField value={value} onChange={setValue} addItem={addItem} />
      <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>
      <ListItems items={items} />
      <p className="items">Items</p>
    </div>
  );
};

export default App;

/*
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
*/
