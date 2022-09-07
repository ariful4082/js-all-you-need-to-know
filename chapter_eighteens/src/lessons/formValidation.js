let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let isValid = false;
    let formData = {};
    [...this.elements].forEach(el =>{
        if(el.type !== 'submit'){
            isValid = validator(el)
            
            if(isValid){
                formData[el.name] = el.value
            }else{
                el.classList.add('is-invalid')
                alert(`${el.name} is Required`)
            }
        }
    })
    if(isValid){
        console.log(formData)
        this.reset();
    }
    
})

function validator(el){
    if(!el.value){
        return false
    }
    if(!el.type === 'password'){
        return false
    }

    return true
}