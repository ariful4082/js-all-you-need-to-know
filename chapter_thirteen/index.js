// var obj = {};
// obj
// {}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// var obj2 = new Object();
// obj2
// {}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// obj.__proto__===obj2.__proto__
// true
// Object.getPrototypeOf(obj)
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// Object.getPrototypeOf(obj)===Object.getPrototypeOf(obj2)
// true

//***********Inheritance **********/
// function Person(name){
//   this.name = name
// }
// var p1 = new Person ('Ariful Islam Raju')
// console.log(p1)


// var person = {
//   name: 'Ariful Islam'
// }
// console.log(person)

// for(var i in person){
//   console.log(i)
// }

// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person,'name')
// console.log(descriptor)

// let basObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(basObj, 'toString')

// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//   enumerable: false,
//   writable: false,
//   configurable: false,
//   value: 'Abdullah Al Zarif'
// })


// function Person(name) {
//   this.name= name
// }

// Person.prototype.PI = 3.1416

// var p1 = new Person('Ariful Islam')
// var p2 = new Person('Abdulla Al Zarif')
// console.log(p1)


// console.log(p2)

function Square(width){
  this.width = width;
   
}

Square.prototype= {
  draw: function(){
    console.log('Draw')
  },
  toString: function (){
    return 'My width is = '+ this.width
  }

}

var sqr1 = new Square(10)
var sqr2 = new Square(5)
