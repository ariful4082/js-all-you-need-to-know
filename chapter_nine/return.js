// function greet(msg){
//     function greetings(name){
//         return msg + ', '+name+ '!'
//     }
//     return greetings
// }


// var gm = greet('Good Morning');
// var gn = greet('Good Might')
// var hello = greet('Hello')
// var msg = gm('Ariful Islam')


// console.log(msg);
// console.log(gn('Abdullah Al Zarif'))

function base(b){
   return function (n){
        var result = 1;
        for(var i = 1; i<=n; i++){
            result *=b
            
        }
        return result
    }

}

var base10 = base(10)
console.log(base10(2))
var base5 = base(5)
console.log(base5(2))
