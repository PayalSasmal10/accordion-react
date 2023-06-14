// import logo from "./logo.svg";
import "./App.css";
import Fetch from "./Fetch.json";

function App() {
  return (
    <div className="App">
      {Fetch.map((val, id) => {
        return (
          <div key={id} className="parent">
            <button className="accordion">{val.title}</button>
            <span className="openingButton">+</span>
            <div className="panel"> 
              <p className="description">{val.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
