var b =10;

// function a(){
//     console.log(b)
// }
// a()


function a(){
    var x =5;

    return function(){
        console.log(x)
    }
}

var abc = a();
console.dir(abc)