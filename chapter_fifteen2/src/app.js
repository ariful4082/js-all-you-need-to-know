const arr = [
    10,22,35
]
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }



// function createIterator (collection){

//     let i = 0;
//  return {
//     next(){
//         return{
//             done: i>= collection.length,
//             value: collection[i++]
//         }
//     }
//  }
// }

// let iterate =createIterator(arr)

// let iterate= arr[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// // console.log(arr[Symbol.iterator])
// // console.log('str'[Symbol.iterator])

// let str = 'TEXT';

// let iterateText  = str[Symbol.iterator]()
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())


//*******For of Loop****** */

// for(let v of arr){
//     console.log(v)
// }

// for(let v of 'Ariful Islam'){
//     console.log(v)
// }


// let obj ={
//     a:10,
//     b: 20
// }

// let objIterate = obj[Symbol.iterator]();

// console.log(objIterate)

// for(let v of obj){
//     console.log(v)
// }

//**********Generator **********/


let obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function*(){
        let currentValue = this.start

        while(currentValue<=this.end){
            yield currentValue++
        }
    }
}

// let iterate = obj[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


// function* generate(){
//     yield 1
//     yield 2
//     yield 3
// }

function *generate(collection){
    for(let i= 0; i<collection.length; i++){
        yield collection[i]
    }
}
let it = generate(arr);
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())