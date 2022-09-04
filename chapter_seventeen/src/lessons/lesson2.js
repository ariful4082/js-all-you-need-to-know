console.log("I am Line one");
setTimeout(() => {
  console.log("I am Line Two");
}, 3000);
setTimeout(() => {
  console.log("I am Line Three");
}, 0);

console.log("I am Line Four");
console.log("I am Line five");
setTimeout(() => {
  console.log("I am Line Six")
}, 1000);

// setTimeout(() => {
//     console.log('I have done')
// }, 5000);
