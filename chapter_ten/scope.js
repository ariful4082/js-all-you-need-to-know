var x = 55;

function text(){
    var x = 45; 
    // console.log(x)

    function nested(){
        var y  = 65
        console.log(x)
    }
    // console.log(y)
    nested()
}

text()