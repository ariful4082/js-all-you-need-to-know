// function add(a, b){
//     var result = a+b;
//     console.log(result);
//     // return result
// }

// add(10, 20)
// add(7, 3)
// add(500, 700)

var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9];
var arr3 = [9, 7, 1];

var sum1 = 0;
for (var i = 0; i < arr1.length; i++) {
  sum1 + arr1[i];
}

console.log(sum1);


var sum2 = 0;
for(var i = 0; i<arr2.length; i++){
    sum2+=arr2[i]
}

console.log(sum2);

function addAll (){
  var sum = 0

  for(var i = 0; i<arguments.length;i++){
    sum+=arguments[i]
  }

  return sum
}

var result = addAll(1,2,3)

console.log(result);