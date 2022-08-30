import React from "react";

import "./App.css";

const App = () => {
  //   let obj = {
  //     start: 1,
  //     end: 5,
  //     [Symbol.iterator]: function () {
  //       let currentValue = this.start;
  //       const self = this;
  //       return {
  //         next() {
  //           return {
  //             done: currentValue > self.end,
  //             value: currentValue >= self.end ? undefined : currentValue++,
  //           };
  //         },
  //       };
  //     },
  //   };

  //   for (let v of obj) {
  //     console.log(v);
  //   }

  //   let iterate = obj[Symbol.iterator]();

  //   console.log(iterate.next());
  //   console.log(iterate.next());
  //   console.log(iterate.next());
  //   console.log(iterate.next());
  //   console.log(iterate.next());
  //   console.log(iterate.next());
  //   console.log(iterate.next());
  //   console.log(iterate.next());

  //   function sum() {
  //     let sum = 0;
  //     for (let i = 0; i < arguments.length; i++) {
  //       sum += arguments[i];
  //     }

  //     return sum;
  //   }

  //   function sum(...rest) {
  //     return rest.reduce((a, b) => a + b);
  //   }
  //   console.log(sum(1, 3, 4, 5, 6));

  //   let a = [1, 2, 3];
  //   console.log(...a);

  //   let obj = {
  //     a: 10,
  //     b: 20,
  //     c: 30,
  //   };

  //   let obj2 = {
  //     ...obj,
  //   };

  //   console.log(obj2);

  //   let a = 10,
  //     b = 20;
  //   let obj = {
  //     a,
  //     b,
  //     print() {
  //       console.log(this);
  //     },
  //   };

  //   //   console.log(obj.print());
  //   obj.print();

  //***************Destructuring in Javascript************ */
  //   let person = {
  //     name: "Ariful Islam",
  //     email: "ariful4082@gmail.com",
  //     address: {
  //       city: "Dhaka",
  //       country: "Bangladesh",
  //     },
  //   };

  //   let {
  //     name,
  //     email,
  //     address: { city, country },
  //   } = person;
  //   console.log(name);
  //   console.log(email);
  //   console.log(city, country);

  /**
   * Array
   */

  //   let arr = [1, 2, 3, 4, 5];
  //   let [first, second, , , last] = arr;
  //   console.log(first, second, last);

  //**********Object From Entries************ */
  //   let obj = {
  //     a: 10,
  //     b: 20,
  //   };

  //   console.log(Object.entries(obj));

  //   let objArr = [
  //     ["a", 10],
  //     ["b", 20],
  //   ];

  //   console.log(Object.fromEntries())

  //*************Symbol*********** *
  //   let s1 = Symbol();
  //   let s2 = Symbol("Test Symbol");

  //   console.log(s1);
  //   console.log(s2);

  //   console.log(s1 === s2);

  let toss = {
    HEAD: Symbol("HEAD"),
    TAIL: Symbol("TAIL"),
  };

  toss.HEAD;

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
