// Execution Context

function a(){
    b()
    console.log('I am Function A')
}

function b(){
    d();
    console.log('I am Function B')
}

function c(){
    console.log('I am Function C')
}

function d(){
    c();
    console.log('I am function D')
}

var x = 100;
a();
console.log('I am Global')

// Creational Phase
// Executional Phase
