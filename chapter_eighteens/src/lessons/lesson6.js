let li1 = document.getElementsByTagName('li') //Element

let li2 = document.querySelectorAll('li') // Node

console.log(li1.constructor.name)
console.log(li2.constructor.name)

let ul = document.querySelector('ul')

console.log(ul.children)
console.log(ul.childNodes)