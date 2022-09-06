// Traversing DOM Element

// let list = document.getElementById('list')
// let parent = list.parentElement
// console.log(parent)

// let children = list.children
// console.log(children)

// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)



// console.log(list.firstElementChild)
// console.log(list.lastElementChild)


let listItem = document.getElementsByTagName('li')

// let listItems = Array.from(listItem)
// let listItems = Array.prototype.slice.apply(listItem)
let listItems = [...listItem]

listItems.forEach((li, ind)=>{
    let text =  li.innerHTML 
    li.innerHTML = `(${ind+1}) ${text}`
})

// console.log(listItems)