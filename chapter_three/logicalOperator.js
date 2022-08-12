// && || !

// A && B
// true && true=true
// true && false= false
// false && true= false
// false && false = false


// A|| B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

var a = 10
var b = 20
var c = 30
var d = 40

if(a > b && c>d){
    console.log('A is greater than B and C is greater than D')
}else{
    console.log('At least one condition is false');
}


if(a > b || c>d){
    console.log('A is greater than B and C is greater than D')
}else{
    console.log('At least one condition is false');
}