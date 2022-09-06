let name = document.getElementById('name')
name.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        document.getElementById('show-name').innerHTML = 'Your Name is '+e.target.value
        
    }
})