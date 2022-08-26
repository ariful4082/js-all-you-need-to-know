// function extend(Parent, Child){
//   Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child
// }
// function Shape(color) {
//   this.color = color
// }

// Shape.prototype.common = function () {
//   console.log("I am Common Method");
// };

// function Square(width, color) {
//   Shape.call(this, color)
//   this.width = width;
// }
// extend(Shape, Square)

// Square.prototype.draw = function () {
//   this.getWidth();
//   console.log("Draw");
// };
// Square.prototype.common = function () {
//   Shape.prototype.common.call(this)
//     console.log('I am calling from Square and I have Overridden')
// }

// // var shape = new Shape();
// var sqr = new Square(45, 'green');

// // shape -> Shape -> Object
// //sqr -> Square -> Object

// //sqr-> Square -> Shape -> Object

// function Circle(r, color){
//   Shape.call(this, color)
//   this.radius = r
// }

// extend(Shape, Circle)


// var circle = new Circle(5, 'red')
// // var cir = new Circle(50)

// Circle.prototype.common = function () {
//   // Shape.prototype.common.call(this)
//     console.log('I am calling from circle and I have Overridden')
// }

// var s = new Shape('Purple')

// var shapes = [s, circle, sqr]

// for(var i of shapes){
//   console.log(i.common());
// }

//********Inheritance & Composition******* */
function mixin(target, ...sources){
  Object.assign(target, ...sources)
}
var canWalk = {
  walk: function (){
    console.log('Walking......')
  }
}
var canEat = {
  eat: function(){
    console.log('Eating......')
  }
}

var canSwim = {
  swim: function(){
    console.log('Swimming...')
  }
}
// var person = Object.assign({}, canWalk, canEat);
// person.name="Ariful Islam"

function Person(name){
  this.name = name
}

// Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canEat, canWalk)
var person = new Person({name: 'Ariful Islam'})
// console.log(person)

function GoldFish(name){
  this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)

var goldFish = new GoldFish('Nilontika.')

console.log(goldFish)