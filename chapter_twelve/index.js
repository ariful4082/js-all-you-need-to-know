// var rect = {
//   width: 100,
//   height: 50,

//   draw: function () {
//     console.log("I am a rectangle");
//     console.log("My width is " + this.width + " and hight is " + this.height);
//     console.log(this)
//   },
//   printProperties : function(){
//     console.log('My Width is '+ this.width)
//     console.log('My Height is '+ this.height)
//   }

// }

// // rect.draw();

// // rect.height = 100;

// // rect.draw();

// rect.printProperties()
// rect.draw()

// function myFunc(){
//   console.log(this)
//   // rect.printProperties()
// }

//  myFunc()

// var another = {
//   width: 47,
//   height: 56,
//   print: rect.printProperties
// };

// console.log(another.print)
// another.print()

//*********Factory Pattern********** */
var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am a rectangle");
    console.log("My width is " + this.width + " and hight is " + this.height);
    console.log(this);
  },
  printProperties: function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  },
};

var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am a rectangle");
      console.log("My width is " + this.width + " and hight is " + this.height);
      console.log(this);
    },
    printProperties: function () {
      console.log("My Width is " + this.width);
      console.log("My Height is " + this.height);
    },
  };
};

// var rect1 = createRect(10, 8);
// rect1.draw();

// var rect2 = createRect(40, 30);
// rect2.draw();

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am a rectangle");
    console.log("My width is " + this.width + " and hight is " + this.height);
    console.log(this);
  };
  this.printProperties = function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  };
};

// var rect3 = new Rectangle(100, 120);

// rect3.draw();

function myNew(constructor) {
  var obj = {};

  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));

  return obj;
}


var rect4 = myNew(Rectangle, 45,30)
rect4.draw()