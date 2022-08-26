function extend(Parent, Child){
  Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child
}
function Shape(color) {
  this.color = color
}

Shape.prototype.common = function () {
  console.log("I am Common Method");
};

function Square(width, color) {
  Shape.call(this, color)
  this.width = width;
}
extend(Shape, Square)

Square.prototype.draw = function () {
  this.getWidth();
  console.log("Draw");
};

// var shape = new Shape();
var sqr = new Square(45, 'green');

// shape -> Shape -> Object
//sqr -> Square -> Object

//sqr-> Square -> Shape -> Object

function Circle(r, color){
  Shape.call(this, color)
  this.radius = r
}

extend(Shape, Circle)


var circle = new Circle(5, 'red')
// var cir = new Circle(50)
