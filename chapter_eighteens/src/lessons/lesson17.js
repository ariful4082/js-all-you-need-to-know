let name = document.getElementById('name')
name.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        document.getElementById('show-name').innerHTML = 'Your Name is '+e.target.value
        
    }
})


let skills = document.getElementsByName('skills');
let result = document.getElementById('result')

let checkedSkills = [];


[...skills].forEach(skill=>{
    skill.addEventListener('change', function(e){
        if(e.target.checked){
            checkedSkills.push(e.target.value)
            outputSkills(result, checkedSkills)
            
        }else{
            let ind = checkedSkills.indexOf(e.target.value)
            checkedSkills.splice(ind,1)
            outputSkills(result, checkedSkills)
            
        }
    })
})

function outputSkills(parent, skills){
    let result = ''
    skills.forEach((skill, index)=>{
        result+=` (${index+1}) ${skill} `
    })
    parent.innerHTML = result
}



let list = document.getElementById('list')
list.addEventListener('dblclick', function(e){
    if(this.contains(e.target)){
        let innerText = e.target.innerText
        e.target.innerHTML = ''
        let inputBox = createInputBox(innerText)
        e.target.appendChild(inputBox)

        inputBox.addEventListener('keypress', function(event){
            if(event.key === 'Enter'){
                e.target.innerHTML = event.target.value
            }
        })
    }
})

function createInputBox(value){
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.className = 'form-control'
    inp.value = value

    return inp
}

// list.addEventListener('click', function(e){
//     console.log('Click')
// })