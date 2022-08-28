import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  // var s = `     dslseraiwtrj

  // afljsiea;eaje

  //      ;alsjeflaej
  // ;aweofjsl
  // `;

  // console.log(s.trim());

  var age = 14;
  var name = "Ariful islam";

  console.log("My name is " + name + " and I am " + age + " years old.");
  console.log(
    `My name is ${name} and I am ${age} year old. I am ${
      age < 18 ? "not" : ""
    } Adult`
  );

  console.log(name.padStart(15, "-"));
  console.log(name.padEnd(20, "."));
  console.log("s".repeat(10));

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
