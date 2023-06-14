// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Fetch from "./Fetch.json";

function App() {
  const [inputChangeTitle, setinputChangeTitle] = useState();
  const [inputChangeDescr, setinputChangeDescr] = useState();
  const [isOpen, setIsOpen] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Fetch);
  }, []);

  const titleInputChangeHandler = (e) => {
    setinputChangeTitle(e.target.value);
  };

  const descInputChangeHandler = (e) => {
    setinputChangeDescr(e.target.value);
  };

  const addItemsHandler = (e) => {
    // setInputChange(items);
    const newItems = { title: inputChangeTitle, description: inputChangeDescr };
    setItems([...items, newItems]);
  };

  const deleteItemsHandler = (id) => {
    const newItems = [...items];
    newItems.splice(id, 1);
    setItems(newItems);
  }

  const isOpenHandler = (id) => {};

  return (
    <div className="App">
      {items.map((val, id) => {
        return (
          <div key={id} className="parent">
            <button className="accordion">{val.title}</button>
            <span className="openingButton">+</span>
            <div className="panel">
              <button className="deleteButton" onClick={() => deleteItemsHandler(id)} >Delete</button>
              <p className="description">{val.description}</p>
            </div>
          </div>
        );
      })}
      <div className="footer">
        <div className="textArea">
          <textarea
            type="textarea"
            className="inputTextArea"
            placeholder="enter title"
            name="title"
            onChange={titleInputChangeHandler}
          />
        </div>
        <div className="textArea">
          <textarea
            type="textarea"
            className="inputTextArea"
            placeholder="enter description"
            name="description"
            onChange={descInputChangeHandler}
          />
        </div>
        <button className="addButton" onClick={addItemsHandler}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
