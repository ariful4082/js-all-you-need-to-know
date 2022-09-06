let li = createElement('li', 'list-group-item', 'Four')
li.className="list-group-item"
li.setAttribute('title', 'I am fourth Item')
// li.innerHTML = 'Four'
// console.log(li)

let list = document.getElementById('list')
list.appendChild(li)




// let p1 = createElement('p', 'lead', `It is a long established fact that a reader will be
// distracted by the readable content of a page when looking at its layout.
// The point of using Lorem Ipsum is that it has a more-or-less normal
// distribution of letters, as opposed to using 'Content here, content
// here', making it look like readable English.`)

// let p2 = createElement('p', 'lead', `It is a long established fact that a reader will be
// distracted by the readable content of a page when looking at its layout.
// The point of using Lorem Ipsum is that it has a more-or-less normal
// distribution of letters, as opposed to using 'Content here, content
// here', making it look like readable English.`)

// let div = createElement('div' )
// append(div, [p1, p2])
// // console.log(div)

// let h2Tag = document.getElementsByTagName('h2')[0]
// list.insertAdjacentElement('beforebegin', div)

// document.getElementsByClassName('container')[0].appendChild(div)

function createElement(tagName, className, innerHTML){
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML ?? ''
    tag.className= className ?? ''
    return tag
}

function append(parent, children){
    children.forEach(child=> parent.appendChild(child))
}


let firstChild = list.firstElementChild
setTimeout(()=>{
    firstChild.innerHTML = firstChild.innerHTML+ ' (Modified)'
    firstChild.style.background = 'green'
    firstChild.classList.add('text-white')
},5000)
// console.log(firstChild)

// setTimeout(()=>{
//     list.lastElementChild.remove()
// }, 3000)



let lastItem = list.lastElementChild.cloneNode(true);
lastItem.innerHTML='Five'
list.appendChild(lastItem)