function sayMyName(name){
    setTimeout(()=>{
        console.log('I have done')
        console.log(name)
    },1000)
}

let output = sayMyName('Ariful islam')

console.log(output)