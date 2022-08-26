function Shape() {}

Shape.prototype.common = function () {
  console.log("I am Common Method");
};

function Square(width) {
  this.width = width;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square

Square.prototype.draw = function () {
  this.getWidth();
  console.log("Draw");
};

var shape = new Shape();
var sqr = new Square(45);

// shape -> Shape -> Object
//sqr -> Square -> Object

//sqr-> Square -> Shape -> Object

// function Circle(r){
//   this.radius = r
// }

// Circle.prototype =Object.create(Shape.prototype)

// var cir = new Circle(50)
