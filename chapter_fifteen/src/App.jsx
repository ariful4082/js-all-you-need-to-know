import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // var s = `     dslseraiwtrj

  // afljsiea;eaje

  //      ;alsjeflaej
  // ;aweofjsl
  // `;

  // console.log(s.trim());

  // var age = 14;
  // var name = "Ariful islam";

  // console.log("My name is " + name + " and I am " + age + " years old.");
  // console.log(
  //   `My name is ${name} and I am ${age} year old. I am ${
  //     age < 18 ? "not" : ""
  //   } Adult`
  // );

  // console.log(name.padStart(15, "-"));
  // console.log(name.padEnd(20, "."));
  // console.log("s".repeat(10));

  // let a = 10;
  // a = 100;
  // console.log(a);
  if (true) {
    let a = 10;
  }

  // console.log(a);
  // for (let i = 0; i < 10; i++) {}

  // // console.log(i);

  // {
  //   let iAmLet = "I am Let";
  // }
  // console.log(iAmLet);

  // (function () {
  //   var abc = "ABC";
  //   console.log(abc);
  // })();

  //***************Arrow Function************** */

  // function add(a, b) {
  //   return a + b;
  // }

  // let sum = function (a, b) {
  //   return a + b;
  // };

  // let add = (a, b) => a + b;

  // console.log(add(45, 50));

  // let sqr = (x) => x * x;
  // function testMe() {
  //   console.log(this);
  // }

  // testMe.call({});

  // let obj = {
  //   name: "Ariful islam",
  //   print: () => {
  //     console.log(this);
  //   },
  // };
  // obj.print();
  // testMe.call({});

  let obj = {
    name: "Ariful islam",
    print: function () {
      let self = this;
      setTimeout(() => {
        console.log(this);
        console.log(`Hello, ${this.name}`);
      }, 1000);
    },
  };
  obj.print();

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
