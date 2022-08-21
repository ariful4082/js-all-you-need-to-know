var arr = [1,2,3, 4,5]

// var sqrArr = arr.map(function(value){
//     // return Math.random()*100

//     return value*value
// })


// console.log(arr)
// console.log(sqrArr)

function map(arr, cb){
    var newArr = []
    for(var i = 0; i<arr.length; i++){
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

console.log(map(arr, function(value){
    return value*value*value
}))

console.log(map(arr, function(value){
    return value*10
}))

