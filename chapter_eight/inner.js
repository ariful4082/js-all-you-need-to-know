function something(greet, name){
    function getFirstName(){
        // console.log(greet + ' ' + name);
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }

    }

  var message = greet + ' ' + getFirstName();
  console.log(message)
}

something('Good Morning', 'Ariful Islam')

