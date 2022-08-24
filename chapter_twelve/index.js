var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("I am a rectangle");
    console.log("My width is " + this.width + " and hight is " + this.height);
  },
};

rect.draw();

rect.height = 100;

rect.draw();
 