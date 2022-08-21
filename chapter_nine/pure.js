

function sqr(n){
    return n*n

}


console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))

var n = 10;

function change(){
    n = 100
}

console.log(n)

var point = {
    x: 10,
    y: 20
}

function printPoint(point) {
    point.x = 100
    point.y = 200
}
printPoint(point)

console.log(point)