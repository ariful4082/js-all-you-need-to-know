// let n = Number.parseInt()

// console.log(n)

// function changeToInt(v){
//     let result = Number.parseInt(v)

//     if(!result){
//         return 'Please Provide a Witch is able to convert a Integer'

//     }
//     return result
// }

// let result = changeToInt('85.96')
// console.log(result)

//****************Error Handling using Try Catch******** */

// function makeWords(text) {
//   // let str = text.trim()
//   // let words = str.split(' ')
//   // return words

//   try {
//     let str = text.trim();
//     let words = str.split(" ");
//     return words;
//   } catch (error) {
//     // console.log(error.message);
//     console.log('Please Provide a valid text');
//   }
// }

// let words = makeWords(86);
// console.log(words);

//**************Throw Error Handling********** */

class CustomError extends Error{
    constructor(msg){
        super(msg)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError)
        }
    }
}
try{
    console.log('I am Line 01')
    // throw new Error('I am your Error')
    throw new CustomError('I am your Error')
    console.log('I am Line 02')
    console.log('I am Line 03')
    console.log('I am Line 04')
}catch(e){
    console.dir(e)
    console.log('This is a Custom Error Message')
}finally{
    console.log('I am Finally Block')
}
