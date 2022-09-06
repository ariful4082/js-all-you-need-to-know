// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 5000, 'One')
// })

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 3000, 'Two')
// })
// // console.log(p1)
// // console.log(p2)

// p1.then((v)=>{
//     console.log(v)
// }).catch(e=>{
//     console.log(e)
// })

// p2.then(v=>{
//     console.log(v)
// })

function getIphone(isPassed){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isPassed){
                resolve('I Have Got an IPhone')
            }else{
                reject(new Error('You Have Failed'))
            }
        }, 2000)
    })
}
getIphone(false)
    .then((res)=>{
        console.log(res)
    })
    .catch(e=>{
        console.log(e.message)
    })

console.log(getIphone(false))